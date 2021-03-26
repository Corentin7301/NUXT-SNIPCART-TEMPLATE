import global from "@/site.config.json"

export default ({ app }, inject) => {
  inject('global', global)
}