import Icon from '../elements/Icon';

export default function SocialIcons() {
  return (
    <div className='flex gap-6 items-start'>
      <Icon href={'mailto:mail@email.ru'} type='email' />
      <Icon href={'tg://resolve?domain=@someTgAccountName'} type='telegram' />
    </div>
  );
}
