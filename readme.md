## @vue/test-utils Version Constraint

`@vue/test-utils` is pinned at `1.0.0-beta.29` due to the removal of synchronous updating in beta 30. Updating to beta 30 will require rewriting a bunch of tests that use `wrapper.setProps({})` to use a `nextTick` callback or modify the `beforeEach` wrapper factory to include an props object. 
