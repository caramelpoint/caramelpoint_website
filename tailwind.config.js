module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1A1A1A',
        },
      },
    },
  },
}
