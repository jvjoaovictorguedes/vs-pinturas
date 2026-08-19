// TODO: substitua pelos dados reais da VS Pinturas antes de publicar.
export const site = {
  nome: "VS Pinturas",
  slogan: "Reformas · Pinturas · Manutenções",
  whatsapp: "5534900000000", // TODO: número real, formato 55DDDNUMERO
  whatsappMensagem: "Olá! Vim pelo site e gostaria de um orçamento.",
  instagram: "https://instagram.com/vspinturas", // TODO: link real
  cidade: "Uberlândia, MG", // TODO: confirmar cidade de atuação
  email: "contato@vspinturas.com.br", // TODO: e-mail real
};

export function whatsappLink(mensagem?: string) {
  const texto = encodeURIComponent(mensagem ?? site.whatsappMensagem);
  return `https://api.whatsapp.com/send/?phone=${site.whatsapp}&text=${texto}&type=phone_number&app_absent=0`;
}
