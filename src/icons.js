import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGlobe, faMusic, faHeart, faCamera, faUserSecret, faHippo} from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe, faMusic, faHeart, faCamera, faUserSecret,faHippo)

Vue.component('fa-icon', FontAwesomeIcon)
