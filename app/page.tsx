import NextLink from 'next/link';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { CheckCircleIcon, GithubIcon, XCircleIcon } from '@/components/icons';
import { Card, CardBody } from '@nextui-org/card';
import AuthButton from '@/components/AuthButton';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center justify-center h-full md:w-1/2">
        <div className="inline-block items-start">
          <h2
            className={subtitle({
              class: 'mb-2 text-cyan-400 dark:text-cyan-600',
              size: 'xs',
            })}>
            JOIN WITH OTHER PLAYERS
          </h2>
          <h1 className={title({ size: 'lg', color: 'stormgate' })}>
            Stormgate
          </h1>
          {/* <h1 className={title({ size: 'lg' })}>Organize&nbsp;</h1> */}
          {/* <h1 className={title({ size: 'lg', color: 'stormgate' })}> */}
          {/*   Your&nbsp; */}
          {/* </h1> */}
          <br />
          <h1 className={title({ size: 'lg' })}>Build&nbsp;</h1>
          <h1 className={title({ size: 'lg' })}>Orders</h1>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex">
              <CheckCircleIcon color="#38A169" />
              &nbsp;Teach you new build orders
            </div>
            <div className="flex">
              <CheckCircleIcon color="#38A169" />
              &nbsp;Encourage you to try out new Races
            </div>
            <div className="flex">
              <CheckCircleIcon color="#38A169" />
              &nbsp;Enable you to win
            </div>
            <div className="flex">
              <XCircleIcon color="#E53E3E" />
              &nbsp;Cook you a nice romantic dinner
            </div>
          </div>
          <div className="flex mt-6">
            <Link
              as={NextLink}
              href={siteConfig.buildOrders.href}
              className={buttonStyles({
                color: 'primary',
                radius: 'md',
                variant: 'shadow',
                size: 'lg',
              })}>
              Build Orders
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-lg gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <Card key={num} className="w-full">
            <CardBody>
              <div className={title({ size: 'sm' })}>
                This is build order number {num}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
