# Kenji Vet Services

A multi-page React + Vite website for Kenji Vet Services.

## Included pages

- Home
- About
- Services
- Gallery
- Booking
- Contact

## Highlights

- Blue, green and white veterinary visual system
- No emoji-based interface elements
- Real Kenji Vet Services photos included locally in `public/images/actual`
- Filterable gallery with full-screen lightbox
- Responsive navigation and mobile layouts
- WhatsApp booking with a pre-filled appointment message
- Email booking using the visitor's configured email application
- Direct call, WhatsApp and email contact links
- Existing site favicon retained

## Run locally

```bash
npm install
npm run dev
```

Vite will display the local development address in your terminal.

## Booking behavior

The WhatsApp button opens WhatsApp with the form details already prepared for `+254 701 973 149`.

The Email button opens the visitor's email application with the recipient, subject and appointment details already prepared for `drkennedymurimi@gmail.com`. It does not expose any email service secret in the frontend.
