"use client";

import { useState } from 'react';

export default function CTAForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setError("Impossible d'envoyer votre demande. R?essayez.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-labelledby="contact-title">
      <div className="row">
        <div>
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" placeholder="Ex. Alex Martin" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="vous@entreprise.com" required />
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="company">Entreprise</label>
          <input id="company" name="company" placeholder="Votre soci?t?" />
        </div>
        <div>
          <label htmlFor="budget">Budget</label>
          <input id="budget" name="budget" placeholder="Ex. 5k - 10k?" />
        </div>
      </div>
      <div>
        <label htmlFor="message">Projet</label>
        <textarea id="message" name="message" placeholder="D?crivez votre cas d'usage (contexte, objectifs, d?lais)" required />
      </div>
      <div className="actions">
        <button className="btn primary" disabled={status==='loading'}>
          {status==='loading' ? 'Envoi?' : 'Envoyer la demande'}
        </button>
      </div>
      <div className="hint" role="status" aria-live="polite">
        {status==='success' && 'Merci ! Nous revenons vers vous sous 24h.'}
        {status==='error' && error}
      </div>
    </form>
  );
}
