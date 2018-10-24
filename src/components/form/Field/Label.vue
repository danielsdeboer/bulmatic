<script>
  import props, { strings } from '../../../definitions/props/field-label'
  import stringsToClasses from '../../../functions/strings-to-classes'
  import Label from '../Label.vue'

  export default {
    render (h) {
      return h(
        'div',
        {
          class: this.cssClasses,
        },
        [
          h(Label, this.$slots.default),
        ]
      )
    },

    props,

    computed: {
      cssClasses () {
        return [
          'field-label',
          ...stringsToClasses(this, strings),
        ]
      },
    },
  }
</script>
