import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MainBanner from '../components/mainBanner'
import bkgPurple from '../images/bkg_purple.svg'

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`caramelpoint`, `caramel`, `point`]} title="CaramelPoint" />
      <MainBanner />
      <img alt="Bkg Purple" className="block w-screen mx-auto mb-8" src={bkgPurple} />
      <section className="text-center">
        {/* <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p> */}
      </section>
    </Layout>
  )
}

export default IndexPage
