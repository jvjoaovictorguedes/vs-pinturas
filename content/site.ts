// TODO: substitua pelos dados reais da VS Pinturas antes de publicar.
export const site = {
  nome: "VS Pinturas",
  slogan: "Reformas · Pinturas · Manutenções",
  whatsapp: "+553496588193",
  whatsappMensagem: "Olá! Vim pelo site e gostaria de um orçamento.",
  instagram: "https://instagram.com/vspinturas",
  cidade: "Uberlândia, MG",
  email: "contato@vspinturas.com.br",
};

export function whatsappLink(mensagem?: string) {
  const texto = encodeURIComponent(mensagem ?? site.whatsappMensagem);
  return `https://api.whatsapp.com/send/?phone=${site.whatsapp}&text=${texto}&type=phone_number&app_absent=0`;
}
