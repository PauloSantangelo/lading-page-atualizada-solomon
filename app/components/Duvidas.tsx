export default function Duvidas() {
  // Componente leve (sem dependências) usando <details> para acessibilidade e SEO
  // Estilização com Tailwind. Pode ser inserido em qualquer página como <Duvidas />
  return (
    <section id="Duvidas" className="w-full max-w-4xl mx-auto px-4 py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">Dúvidas frequentes</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Respostas rápidas sobre o Solomon, seu agente de investimentos com IA no WhatsApp.
        </p>
      </header>

      <div className="space-y-4">
        <Item
          pergunta="O que é o Solomon?"
          resposta="É um agente de investimentos com inteligência artificial que conversa com você pelo WhatsApp. Ele filtra notícias do mercado de acordo com seus interesses, responde dúvidas e envia atualizações objetivas para ajudar na sua tomada de decisão."
        />

        <Item
          pergunta="O Solomon investe por mim?"
          resposta="Não. Ele não realiza ordens, não tem acesso à sua conta e não executa operações. O papel dele é informar e orientar com conteúdo educativo e dados de mercado para que você decida o que fazer."
        />

        <Item
          pergunta="É seguro usar pelo WhatsApp?"
          resposta="Sim. Usamos comunicação criptografada do WhatsApp e políticas internas de segurança. O Solomon não solicita senhas, tokens ou dados sensíveis de corretoras. Você controla o que compartilha e pode excluir suas preferências quando quiser."
        />

        <Item
          pergunta="De onde vêm as informações e notícias?"
          resposta="O Solomon consolida dados de fontes públicas e provedores financeiros confiáveis (cotações, índices, calendário econômico e notícias). Sempre que possível, ele indica a fonte, o horário e o contexto do dado."
        />

        <Item
          pergunta="Como começo a usar?"
          resposta="Escolha um plano e você terá 7 dias gratuitos para testar, o contato do Solomon liberado após cadastro, envie um primeiro oi no WhatsApp. Ele vai perguntar seus interesses (ex.: ações brasileiras, FIIs, dólar, cripto) para personalizar os alertas e o resumo semanal."
        />

        <Item
          pergunta="Posso personalizar o que recebo?"
          resposta="Pode. A qualquer momento, envie mensagens como ‘preferências’, ‘parar cripto’, ‘incluir FIIs’ ou ‘mudar frequência’. O Solomon confirma o que foi alterado e mantém um histórico de preferências."
        />

        <Item
          pergunta="O Solomon dá recomendações de compra e venda?"
          resposta="Não. O conteúdo é educativo e informativo. Ele pode explicar conceitos, comparar produtos e mostrar dados, mas a decisão é sua. Se quiser, ele também pode te direcionar para falar com um assessor humano."
        />

        <Item
          pergunta="Quanto custa?"
          resposta="Há um plano gratuito com resumo semanal e dúvidas básicas. Planos pagos liberam alertas em tempo quase real, filtros avançados e relatórios customizados. Fale ‘planos’ no WhatsApp para ver os detalhes."
        />

        <Item
          pergunta="Como o Solomon trata meus dados?"
          resposta="Seguimos boas práticas de privacidade e conformidade com a legislação aplicável (como LGPD). Guardamos apenas o mínimo necessário para prestar o serviço e você pode pedir exportação ou exclusão."
        />
      </div>
    </section>
  );
}

function Item({
  pergunta,
  resposta,
}: {
  pergunta: string;
  resposta: string;
}) {
  return (
    <details className="group rounded-2xl border border-border p-4 hover:bg-muted/40 transition-colors">
      <summary className="flex list-none items-center justify-between cursor-pointer select-none">
        <span className="text-base font-medium">{pergunta}</span>
        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {resposta}
      </div>
    </details>
  );
}
