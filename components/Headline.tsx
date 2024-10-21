import { log } from "console";


type Props = {
    title: string;
    page:string;
  };

export default function Headline(props:Props) {
    console.log(props.title);
  return (
    <div>
    
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Hello Get started by editing {props.title}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
             <br/>
             page/{props.page}.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
    </div>
  );
}
