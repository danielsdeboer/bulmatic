<script>
  import { str } from '../../functions/validators'
  import props, { strings, bools } from '../../definitions/props/button'
  import stringsToClasses from '../../functions/strings-to-classes'
  import boolsToClasses from '../../functions/booleans-to-classes'
  import Icon from './Icon.vue'

  export default {
    render (h) {
      return h(
        this.tag,
        {
          class: this.cssClasses,
          attrs: this.htmlAttributes,
        },
        this.content
      )
    },

    props: Object.assign(props, {
      tag: str('button', ['button', 'a', 'input']),
      textContent: str(false),
      inputType: str('submit'),
      icon: str(false),
    }),

    components: {
      Icon,
    },

    computed: {
      content () {
        return this.hasIcon
          ? this.hasIconContent
          : this.defaultContent
      },

      defaultContent () {
        return this.$slots.default || this.textContent
      },

      hasIconContent () {
        const content = this.defaultContent
          ? this.$createElement('span', this.defaultContent)
          : null

        return [
          this.$createElement(Icon, { props: { icon: this.icon } }),
          content,
        ]
      },

      hasIcon () {
        return !!this.icon
      },

      htmlAttributes () {
        return this.tag === 'input'
          ? { type: this.inputType }
          : {}
      },

      cssClasses () {
        return [
          'button',
          ...this.stringClasses,
          ...this.boolClasses,
        ]
      },

      stringClasses () {
        return stringsToClasses(this, strings)
      },

      boolClasses () {
        return boolsToClasses(this, bools)
      },
    },
  }
</script>
