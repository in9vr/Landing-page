export default function Button({ name, href }) {
  return (
    <a
      className='w-max uppercase font-light bg-primary text-on-primary hover:brightness-110 px-5 py-4 rounded-lg transition-all duration-200 ease-in-out'
      href={href}
    >
      <span>{name}</span>
    </a>
  );
}
