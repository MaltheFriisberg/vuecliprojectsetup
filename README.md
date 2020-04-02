# multipage vue cli app

A project setup for a Vue CLI project with multiple toplevel components.

# Structure

Toplevel components resides in src/views.
Shared components resides in src/components.
run following commands to output all toplevel components/views for production
```
npm run build
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Serve toplevel components for development

### Serve the Index top level component as Vue app
```
npm run serve-index
```
### Serve the subpage top level component as Vue app
```
npm run serve-subpage
```
# Other output types

### Build Index as a webcomponent
```
vue build --target wc --name my-element src/subpage/App.Vue
```

### Build Index entry as a component library
```
npm run index-lib-build
```