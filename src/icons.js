import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faTree, faMusic, faHeart, faCamera, faUserSecret, faHippo} from '@fortawesome/free-solid-svg-icons'

library.add(faTree, faMusic, faHeart, faCamera, faUserSecret,faHippo)

Vue.component('fa-icon', FontAwesomeIcon)
