/* Astro integration for Intrio. No form delivery backend is configured. */
(() => {
  document.querySelectorAll('form[data-local-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      let status = form.querySelector('.local-form-status');
      if (!status) {
        status = document.createElement('p');
        status.className = 'local-form-status';
        status.setAttribute('role', 'status');
        form.append(status);
      }
      status.textContent = 'Your details are ready. This preview does not send messages. Please contact contact@intrio.com directly.';
    });
  });
  const menu = document.querySelector('#menu-btn');
  if (menu) {
    menu.setAttribute('role', 'button');
    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-label', 'Toggle navigation');
    menu.setAttribute('aria-controls', 'mainmenu');
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      setTimeout(() => menu.setAttribute('aria-expanded', String(menu.classList.contains('menu-open'))), 0);
    });
    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        menu.click();
      }
    });
  }
  const controls = [
    ['#btn-extra', 'Open information panel'],
    ['#btn-close', 'Close information panel'],
    ['.btn-next, .d-next', 'Next slide'],
    ['.btn-prev, .d-prev', 'Previous slide'],
    ['.accordion-section-title', null],
  ];
  for (const [selector, label] of controls) {
    document.querySelectorAll(selector).forEach((control) => {
      control.setAttribute('role', 'button');
      control.setAttribute('tabindex', '0');
      if (label) control.setAttribute('aria-label', label);
      control.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          control.click();
        }
      });
    });
  }
  const updateAccordion = () => {
    document.querySelectorAll('.accordion-section-title').forEach((title) => {
      title.setAttribute('aria-expanded', String(title.classList.contains('active')));
      const target = title.getAttribute('data-tab');
      if (target?.startsWith('#')) title.setAttribute('aria-controls', target.slice(1));
    });
  };
  updateAccordion();
  document.querySelectorAll('.accordion-section-title').forEach((title) => {
    title.addEventListener('click', () => setTimeout(updateAccordion, 0));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('#extra-wrap.open')) {
      document.querySelector('#btn-close')?.click();
      document.querySelector('#btn-extra')?.focus();
    }
  });
})();
