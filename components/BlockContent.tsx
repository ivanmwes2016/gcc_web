import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../lib/client'

interface Props {
  blocks?: string | any[] | string[] | any
  className?: string
}

export default function BlockContent({ blocks, className }: Props) {
  const customComponent: Partial<PortableTextReactComponents> = {
    block: {
      h2: ({ children }: any) => <h2>{children}</h2>,
      h3: ({ children }: any) => <h3>{children}</h3>,
      h4: ({ children }: any) => (
        <h4 className="font-bold text-2xl md:my-4 my-8 text-cyan-600 md:w-[70%] text-center">
          {children}
        </h4>
      ),
    },

    types: {
      image: ({ value }) => (
        <Image
          src={`${urlFor(value.asset).width(600).url()}`}
          alt=""
          width={400}
          height={400}
          className="my-8"
          loading="lazy"
        />
      ),
    },

    marks: {
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),

      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined
        return (
          <a href={value?.href} target={target} rel={'_blank'}>
            {children}
          </a>
        )
      },
    },

    list: {
      bullet: ({ children }) => <ul className=" mt-5 pl-12">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => (
        <li style={{ listStyleType: 'disc' }}>{children}</li>
      ),
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
  }

  return (
    <div className={`${className}`}>
      <PortableText
        components={customComponent}
        value={blocks}
        onMissingComponent={false}
      />
    </div>
  )
}
