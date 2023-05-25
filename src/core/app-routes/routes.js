import React from 'react'
import SSHKey from 'src/views/post-auth/ssh_props/SSHKey'

const Dashboard = React.lazy(() => import('../../views/post-auth/dashboard/Dashboard'))
const Settings = React.lazy(() => import('../../views/post-auth/settings/Settings'))
const AddNewSite = React.lazy(() => import('../../views/post-auth/add-new/AddNewSite'))
const Profile = React.lazy(() => import('../../views/post-auth/profile/Profile'))

// Theme
const Colors = React.lazy(() => import('../../views/react-core-ui-components/theme/colors/Colors'))
const Typography = React.lazy(() =>
  import('../../views/react-core-ui-components/theme/typography/Typography'),
)

// Base
const Accordion = React.lazy(() =>
  import('../../views/react-core-ui-components/base/accordion/Accordion'),
)
const Breadcrumbs = React.lazy(() =>
  import('../../views/react-core-ui-components/base/breadcrumbs/Breadcrumbs'),
)
const Cards = React.lazy(() => import('../../views/react-core-ui-components/base/cards/Cards'))
const Carousels = React.lazy(() =>
  import('../../views/react-core-ui-components/base/carousels/Carousels'),
)
const Collapses = React.lazy(() =>
  import('../../views/react-core-ui-components/base/collapses/Collapses'),
)
const ListGroups = React.lazy(() =>
  import('../../views/react-core-ui-components/base/list-groups/ListGroups'),
)
const Navs = React.lazy(() => import('../../views/react-core-ui-components/base/navs/Navs'))
const Paginations = React.lazy(() =>
  import('../../views/react-core-ui-components/base/paginations/Paginations'),
)
const Placeholders = React.lazy(() =>
  import('../../views/react-core-ui-components/base/placeholders/Placeholders'),
)
const Popovers = React.lazy(() =>
  import('../../views/react-core-ui-components/base/popovers/Popovers'),
)
const Progress = React.lazy(() =>
  import('../../views/react-core-ui-components/base/progress/Progress'),
)
const Spinners = React.lazy(() =>
  import('../../views/react-core-ui-components/base/spinners/Spinners'),
)
const Tables = React.lazy(() => import('../../views/react-core-ui-components/base/tables/Tables'))
const Tooltips = React.lazy(() =>
  import('../../views/react-core-ui-components/base/tooltips/Tooltips'),
)

// Buttons
const Buttons = React.lazy(() =>
  import('../../views/react-core-ui-components/buttons/buttons/Buttons'),
)
const ButtonGroups = React.lazy(() =>
  import('../../views/react-core-ui-components/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() =>
  import('../../views/react-core-ui-components/buttons/dropdowns/Dropdowns'),
)

//Forms
const ChecksRadios = React.lazy(() =>
  import('../../views/react-core-ui-components/forms/checks-radios/ChecksRadios'),
)
const FloatingLabels = React.lazy(() =>
  import('../../views/react-core-ui-components/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() =>
  import('../../views/react-core-ui-components/forms/form-control/FormControl'),
)
const InputGroup = React.lazy(() =>
  import('../../views/react-core-ui-components/forms/input-group/InputGroup'),
)
const Layout = React.lazy(() => import('../../views/react-core-ui-components/forms/layout/Layout'))
const Range = React.lazy(() => import('../../views/react-core-ui-components/forms/range/Range'))
const Select = React.lazy(() => import('../../views/react-core-ui-components/forms/select/Select'))
const Validation = React.lazy(() =>
  import('../../views/react-core-ui-components/forms/validation/Validation'),
)

// Charts
const Charts = React.lazy(() => import('../../views/react-core-ui-components/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() =>
  import('../../views/react-core-ui-components/icons/coreui-icons/CoreUIIcons'),
)
const Flags = React.lazy(() => import('../../views/react-core-ui-components/icons/flags/Flags'))
const Brands = React.lazy(() => import('../../views/react-core-ui-components/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() =>
  import('../../views/react-core-ui-components/notifications/alerts/Alerts'),
)
const Badges = React.lazy(() =>
  import('../../views/react-core-ui-components/notifications/badges/Badges'),
)
const Modals = React.lazy(() =>
  import('../../views/react-core-ui-components/notifications/modals/Modals'),
)
const Toasts = React.lazy(() =>
  import('../../views/react-core-ui-components/notifications/toasts/Toasts'),
)

// Widgets
const Widgets = React.lazy(() => import('../../views/react-core-ui-components/widgets/Widgets'))

const routes = [
  // APP ROUTES ------------------------------------
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/settings', name: 'Settings', element: Settings },
  { path: '/deploy', name: 'Website Deployment', element: AddNewSite },
  { path: '/ssh', name: 'SSH', element: SSHKey },
  { path: '/profile', name: 'Profile', element: Profile },
  // { path: '/change-password', name: 'Settings', element: Settings },

  // THEMES ----------------------------------------
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  // BASE ------------------------------------------
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // BUTTONS ----------------------------------------
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // CHARTS -----------------------------------------
  { path: '/charts', name: 'Charts', element: Charts },
  // FORMS ------------------------------------------
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  // ICONS ------------------------------------------
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  // NOTIFICATIONS ----------------------------------
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // WIDGETS ----------------------------------------
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
