export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">О сервисе</h1>
      <p className="text-[#64748b] mb-10">Сервис сравнения цен на металлопрокат от проверенных поставщиков</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">Что такое МЕТ365</h2>
          <p className="text-sm text-[#64748b] leading-relaxed">
            МЕТ365 — это сервис сравнения цен на металлопрокат. Мы собираем прайсы от проверенных
            поставщиков — производителей и металлобаз — и публикуем их в одном месте. Вы видите
            реальные цены и можете быстро найти лучшее предложение, не обзванивая десятки компаний.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">Почему только проверенные поставщики</h2>
          <p className="text-sm text-[#64748b] leading-relaxed">
            Рынок металлопроката переполнен посредниками и перекупами, которые накручивают цену
            на 15–30%. Мы вручную проверяем каждого поставщика перед размещением — принимаем только
            тех, кто работает напрямую: заводы, металлобазы, крупные склады. Без посредников — цены честнее.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">Как это работает</h2>
          <div className="space-y-3">
            {[
              { num: '1', text: 'Поставщики передают нам актуальные прайсы — вручную или автоматически' },
              { num: '2', text: 'Мы публикуем цены в удобном виде с сортировкой и фильтрами' },
              { num: '3', text: 'Вы находите лучшее предложение и получаете контакт поставщика' },
              { num: '4', text: 'Договариваетесь напрямую — без нашего участия и без комиссии' },
            ].map(item => (
              <div key={item.num} className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-full bg-[#e85d04] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {item.num}
                </span>
                <p className="text-sm text-[#64748b] pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">Бесплатно и по подписке</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-4">
              <h3 className="font-medium text-[#1a1a1a] mb-2">Бесплатно</h3>
              <ul className="space-y-1.5 text-sm text-[#64748b]">
                <li>✓ Все цены на металлопрокат</li>
                <li>✓ Город и название поставщика</li>
                <li>✓ Наличие на складе</li>
                <li>✓ Поиск и фильтры</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#e85d04] p-4">
              <h3 className="font-medium text-[#1a1a1a] mb-2">По подписке</h3>
              <ul className="space-y-1.5 text-sm text-[#64748b]">
                <li>✓ Контакты поставщиков</li>
                <li>✓ Самые выгодные предложения</li>
                <li>✓ Уведомления об изменении цен</li>
                <li>✓ История цен</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2">Связаться с нами</h2>
          <p className="text-sm text-[#64748b] mb-3">Вопросы, предложения, заявки на размещение прайса:</p>
          <a href="mailto:info@met365.ru" className="text-[#e85d04] text-sm font-medium hover:underline">
            info@met365.ru
          </a>
        </section>
      </div>
    </div>
  )
}
