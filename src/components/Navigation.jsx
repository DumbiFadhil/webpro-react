import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex sm:justify-center space-x-4 bg-slate-900">
      {[
        ['Home', '/home'],
        ['About', '/about'],
        ['FAQ', '/questions'],
        ['Contacts', '/contact'],
      ].map(([title, url]) => (
        <a href={url} className="no-underline px-4 py-2 text-slate-100 font-medium hover:bg-slate-300 hover:text-slate-700">{title}</a>
      ))}
    </nav>

  );
};
