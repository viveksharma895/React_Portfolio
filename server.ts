import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
  createdAt: string;
}

// In-memory inquiry store for client inquiries
const inquiries: ContactInquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Health Check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Contact Form Submission API
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, projectType, budget, message } = req.body;

      if (!name || typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ success: false, error: 'Full name is required.' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.trim())) {
        return res.status(400).json({ success: false, error: 'A valid email address is required.' });
      }

      if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ success: false, error: 'Project description is required.' });
      }

      const inquiry: ContactInquiry = {
        id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        projectType: projectType || 'Website Development',
        budget: budget || 'Flexible',
        message: message.trim(),
        createdAt: new Date().toISOString(),
      };

      inquiries.push(inquiry);
      console.log(`[New Project Inquiry] ID: ${inquiry.id} | From: ${inquiry.name} <${inquiry.email}> | Type: ${inquiry.projectType} | Budget: ${inquiry.budget}`);

      return res.status(200).json({
        success: true,
        inquiryId: inquiry.id,
        message: 'Thank you! Your message has been directly received. Vivek will respond within 24 hours.',
        data: {
          recipient: 'sharma.vivek895@gmail.com',
          phone: '+91 9717679664',
          whatsappLink: `https://wa.me/919717679664?text=${encodeURIComponent(
            `Hi Vivek, I just submitted an inquiry on your portfolio for a ${inquiry.projectType} project.`
          )}`,
        },
      });
    } catch (err) {
      console.error('[Contact Error]', err);
      return res.status(500).json({
        success: false,
        error: 'An unexpected server error occurred while processing your message. Please reach out directly via email or WhatsApp.',
      });
    }
  });

  // Development: Vite middleware / Production: static files
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
