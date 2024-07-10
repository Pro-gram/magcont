import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Not A Gay Contractor.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Not A Gay Contractor."
      intro="I'd probably suck dick for money though."
    >
      <div className="space-y-20">
        <ToolsSection title="I do this...">
          <Tool title="Smack Smack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="Smackidy Smack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="Touch Touch">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="Bing Bang Boom">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="And its done">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Carpentry">
          <Tool title="Actual Fucking Idea">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="Get the Picture">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="This was a pain in the ass">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
        </ToolsSection>
        <ToolsSection title="How Many Variables do we need kthx">
          <Tool title="FUCK">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="Reflect">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="SavvyCal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
          <Tool title="Focus">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, nunc vel interdum blandit, urna justo pulvinar lorem, nec vestibulum libero sapien et est. Fusce venenatis, nulla ut tincidunt consectetur, nulla risus gravida libero, non vestibulum lacus nisi eu ligula. Praesent auctor ipsum ac augue fermentum, at aliquet mi dignissim. Mauris in purus ut leo pharetra volutpat non in odio.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
