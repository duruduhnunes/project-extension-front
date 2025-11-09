import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  const phone = "5581999969101";
  const message =
    "Olá, estou entrando em contato pelo seu site. Amei as opções de comida e gostaria de fazer um pedido.";
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  const text = "Clique para enviar uma mensagem no WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full shadow-2xl cursor-pointer p-3"
      title={text}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
