
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Bookcard': typeof import("../components/Bookcard.vue")['default']
    'ColorMode': typeof import("../components/ColorMode.vue")['default']
    'Drawer': typeof import("../components/Drawer.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Navigation': typeof import("../components/Navigation.vue")['default']
    'PopularBook': typeof import("../components/PopularBook.vue")['default']
    'TitleBlock': typeof import("../components/TitleBlock.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'ElAffix': typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
    'ElAnchor': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
    'ElAlert': typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
    'ElAnchorLink': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
    'ElAside': typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
    'ElAutoResizer': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
    'ElAvatar': typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
    'ElBreadcrumbItem': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
    'ElAutocomplete': typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
    'ElBadge': typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
    'ElButton': typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
    'ElCard': typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
    'ElCalendar': typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
    'ElCarousel': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
    'ElCarouselItem': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
    'ElCascader': typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
    'ElCascaderPanel': typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
    'ElCheckTag': typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
    'ElCheckbox': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
    'ElCheckboxButton': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
    'ElCheckboxGroup': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
    'ElCollapse': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
    'ElCol': typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
    'ElCollapseItem': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
    'ElCollapseTransition': typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
    'ElCollection': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
    'ElCollectionItem': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
    'ElColorPicker': typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
    'ElConfigProvider': typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
    'ElContainer': typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
    'ElCountdown': typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
    'ElDatePicker': typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
    'ElDescriptions': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
    'ElDescriptionsItem': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
    'ElDialog': typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
    'ElDivider': typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
    'ElDrawer': typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
    'ElDropdown': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
    'ElDropdownItem': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
    'ElDropdownMenu': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
    'ElFooter': typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
    'ElEmpty': typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
    'ElFormItem': typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
    'ElForm': typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
    'ElIcon': typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
    'ElHeader': typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
    'ElImageViewer': typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
    'ElImage': typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
    'ElInput': typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
    'ElInputNumber': typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
    'ElInputTag': typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
    'ElMain': typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
    'ElLink': typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
    'ElMention': typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
    'ElMenuItem': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
    'ElMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
    'ElOption': typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
    'ElMenuItemGroup': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
    'ElOptionGroup': typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
    'ElOverlay': typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
    'ElPageHeader': typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
    'ElPopover': typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
    'ElPopconfirm': typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
    'ElPagination': typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
    'ElPopper': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
    'ElPopperArrow': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
    'ElPopperContent': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
    'ElPopperTrigger': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
    'ElRadio': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
    'ElProgress': typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
    'ElRadioButton': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
    'ElRate': typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
    'ElRadioGroup': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
    'ElResult': typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
    'ElRow': typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
    'ElSelect': typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
    'ElSelectV2': typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
    'ElSegmented': typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
    'ElSkeleton': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
    'ElSkeletonItem': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
    'ElSpace': typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
    'ElStatistic': typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
    'ElSlider': typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
    'ElSteps': typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
    'ElStep': typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
    'ElScrollbar': typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
    'ElSubMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
    'ElSwitch': typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
    'ElTabPane': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
    'ElTable': typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
    'ElTableV2': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
    'ElTableColumn': typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
    'ElTabs': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
    'ElText': typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
    'ElTag': typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
    'ElTimelineItem': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
    'ElTimePicker': typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
    'ElTimeline': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
    'ElTimeSelect': typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
    'ElTourStep': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
    'ElTransfer': typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
    'ElTree': typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
    'ElTooltip': typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
    'ElTreeSelect': typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
    'ElTreeV2': typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
    'ElUpload': typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
    'ElWatermark': typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
    'ElTour': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
    'ElIconAddLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
    'ElIconAim': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
    'ElIconAlarmClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
    'ElIconApple': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
    'ElIconArrowDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
    'ElIconArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
    'ElIconArrowDownBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
    'ElIconArrowRightBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
    'ElIconArrowLeftBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
    'ElIconArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
    'ElIconArrowUpBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
    'ElIconArrowUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
    'ElIconAvatar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
    'ElIconBasketball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
    'ElIconBell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
    'ElIconBaseball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
    'ElIconBack': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
    'ElIconBellFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
    'ElIconBicycle': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
    'ElIconBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
    'ElIconBottomLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
    'ElIconBottomRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
    'ElIconBowl': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
    'ElIconBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
    'ElIconBrush': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
    'ElIconBriefcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
    'ElIconBrushFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
    'ElIconBurger': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
    'ElIconCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
    'ElIconCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
    'ElIconCalendar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
    'ElIconCaretBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
    'ElIconCaretLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
    'ElIconCaretRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
    'ElIconCaretTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
    'ElIconChatDotRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
    'ElIconChatDotSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
    'ElBreadcrumb': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
    'ElIconCellphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
    'ElButtonGroup': typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
    'ElIconChatLineRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
    'ElBacktop': typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
    'ElIconChatLineSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
    'ElIconChatRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
    'ElIconChatSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
    'ElIconCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
    'ElIconChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
    'ElIconCherry': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
    'ElIconChicken': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
    'ElIconChromeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
    'ElIconCircleCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
    'ElIconCircleCheckFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
    'ElIconCircleCloseFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
    'ElIconCirclePlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
    'ElIconCircleClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
    'ElIconCirclePlusFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
    'ElIconClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
    'ElIconClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
    'ElIconCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
    'ElIconCloseBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
    'ElIconCoffee': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
    'ElIconCoffeeCup': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
    'ElIconCoin': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
    'ElIconColdDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
    'ElIconCollection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
    'ElIconCollectionTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
    'ElIconCompass': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
    'ElIconComment': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
    'ElIconConnection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
    'ElIconCoordinate': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
    'ElIconCpu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
    'ElIconCopyDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
    'ElIconCreditCard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
    'ElIconCrop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
    'ElIconDArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
    'ElIconDArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
    'ElIconDataAnalysis': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
    'ElIconDataBoard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
    'ElIconDCaret': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
    'ElIconDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
    'ElIconDataLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
    'ElIconDeleteFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
    'ElIconDessert': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
    'ElIconDeleteLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
    'ElIconDiscount': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
    'ElIconDish': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
    'ElIconDishDot': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
    'ElIconDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
    'ElIconDocumentAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
    'ElIconDocumentChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
    'ElIconDocumentCopy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
    'ElIconDocumentDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
    'ElIconDocumentRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
    'ElIconDownload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
    'ElIconDrizzling': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
    'ElIconEdit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
    'ElIconEleme': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
    'ElIconEditPen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
    'ElIconExpand': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
    'ElIconElementPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
    'ElIconElemeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
    'ElIconFailed': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
    'ElIconFemale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
    'ElIconFiles': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
    'ElIconFilm': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
    'ElIconFinished': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
    'ElIconFirstAidKit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
    'ElIconFlag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
    'ElIconFilter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
    'ElIconFold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
    'ElIconFolderAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
    'ElIconFolder': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
    'ElIconFolderChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
    'ElIconFolderDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
    'ElIconFolderRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
    'ElIconFolderOpened': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
    'ElIconFood': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
    'ElIconFootball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
    'ElIconFries': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
    'ElIconForkSpoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
    'ElIconGobletFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
    'ElIconGoblet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
    'ElIconGoldMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
    'ElIconFullScreen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
    'ElIconGobletSquareFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
    'ElIconGobletSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
    'ElIconGoods': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
    'ElIconGoodsFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
    'ElIconGrape': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
    'ElIconGuide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
    'ElIconHandbag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
    'ElIconGrid': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
    'ElIconHelp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
    'ElIconHeadset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
    'ElIconHide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
    'ElIconHelpFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
    'ElIconHotWater': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
    'ElIconHistogram': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
    'ElIconHomeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
    'ElIconIceCream': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
    'ElIconHouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
    'ElIconIceCreamRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
    'ElIconIceTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
    'ElIconIceCreamSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
    'ElIconIceDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
    'ElIconInfoFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
    'ElIconIphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
    'ElIconKey': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
    'ElIconKnifeFork': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
    'ElIconLightning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
    'ElIconList': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
    'ElIconLoading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
    'ElIconLink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
    'ElIconLocationInformation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
    'ElIconLollipop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
    'ElIconMagicStick': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
    'ElIconMagnet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
    'ElIconMale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
    'ElIconManagement': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
    'ElIconMapLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
    'ElIconLocationFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
    'ElIconLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
    'ElIconLock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
    'ElIconMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
    'ElIconMenu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
    'ElIconMessageBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
    'ElIconMessage': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
    'ElIconMemo': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
    'ElIconMic': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
    'ElIconMilkTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
    'ElIconMinus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
    'ElIconMicrophone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
    'ElIconMonitor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
    'ElIconMoney': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
    'ElIconMoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
    'ElIconMore': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
    'ElIconMoonNight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
    'ElIconMoreFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
    'ElIconMostlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
    'ElIconMouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
    'ElIconMuteNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
    'ElIconMug': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
    'ElIconNotebook': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
    'ElIconMute': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
    'ElIconNoSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
    'ElIconNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
    'ElIconOdometer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
    'ElIconOpen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
    'ElIconOfficeBuilding': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
    'ElIconOpportunity': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
    'ElIconOperation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
    'ElIconOrange': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
    'ElIconPaperclip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
    'ElIconPartlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
    'ElIconPear': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
    'ElIconPhoneFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
    'ElIconPhone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
    'ElIconPicture': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
    'ElIconPictureFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
    'ElIconPictureRounded': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
    'ElIconPieChart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
    'ElIconPlace': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
    'ElIconPlatform': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
    'ElIconPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
    'ElIconPointer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
    'ElIconPosition': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
    'ElIconPostcard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
    'ElIconPouring': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
    'ElIconPresent': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
    'ElIconPriceTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
    'ElIconPrinter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
    'ElIconQuartzWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
    'ElIconPromotion': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
    'ElIconReading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
    'ElIconReadingLamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
    'ElIconQuestionFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
    'ElIconRank': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
    'ElIconRefresh': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
    'ElIconRefreshLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
    'ElIconRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
    'ElIconRefrigerator': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
    'ElIconRemoveFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
    'ElIconRefreshRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
    'ElIconRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
    'ElIconScaleToOriginal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
    'ElIconSchool': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
    'ElIconSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
    'ElIconSearch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
    'ElIconScissor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
    'ElIconSell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
    'ElIconSemiSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
    'ElIconService': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
    'ElIconSetUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
    'ElIconShip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
    'ElIconShop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
    'ElIconShare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
    'ElIconShoppingBag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
    'ElIconSetting': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
    'ElIconShoppingCart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
    'ElIconShoppingCartFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
    'ElIconShoppingTrolley': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
    'ElIconSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
    'ElIconSoccer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
    'ElIconSoldOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
    'ElIconSort': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
    'ElIconSortDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
    'ElIconSortUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
    'ElIconStamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
    'ElIconStopwatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
    'ElIconStarFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
    'ElIconStar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
    'ElIconSuccessFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
    'ElIconSugar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
    'ElIconSuitcaseLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
    'ElIconSuitcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
    'ElIconSwitch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
    'ElIconSunny': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
    'ElIconSunset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
    'ElIconSunrise': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
    'ElIconSwitchButton': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
    'ElIconSwitchFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
    'ElIconTakeawayBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
    'ElIconTimer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
    'ElIconTickets': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
    'ElIconTicket': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
    'ElIconTools': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
    'ElIconToiletPaper': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
    'ElIconTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
    'ElIconTopLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
    'ElIconTopRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
    'ElIconTrendCharts': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
    'ElIconTrophy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
    'ElIconTrophyBase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
    'ElIconTurnOff': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
    'ElIconUmbrella': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
    'ElIconUpload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
    'ElIconUnlock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
    'ElIconUploadFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
    'ElIconUserFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
    'ElIconUser': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
    'ElIconVan': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
    'ElIconVideoCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
    'ElIconVideoCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
    'ElIconView': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
    'ElIconVideoPlay': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
    'ElIconVideoPause': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
    'ElIconWallet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
    'ElIconWalletFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
    'ElIconWarnTriangleFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
    'ElIconWarning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
    'ElIconWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
    'ElIconWarningFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
    'ElIconWatermelon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
    'ElIconWindPower': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
    'ElIconZoomIn': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
    'ElIconZoomOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
    'ElIcondefault': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBookcard': LazyComponent<typeof import("../components/Bookcard.vue")['default']>
    'LazyColorMode': LazyComponent<typeof import("../components/ColorMode.vue")['default']>
    'LazyDrawer': LazyComponent<typeof import("../components/Drawer.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyNavigation': LazyComponent<typeof import("../components/Navigation.vue")['default']>
    'LazyPopularBook': LazyComponent<typeof import("../components/PopularBook.vue")['default']>
    'LazyTitleBlock': LazyComponent<typeof import("../components/TitleBlock.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyElAffix': LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
    'LazyElAnchor': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
    'LazyElAlert': LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
    'LazyElAnchorLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
    'LazyElAside': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
    'LazyElAutoResizer': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
    'LazyElAvatar': LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
    'LazyElBreadcrumbItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
    'LazyElAutocomplete': LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
    'LazyElBadge': LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
    'LazyElButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
    'LazyElCard': LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
    'LazyElCalendar': LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
    'LazyElCarousel': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
    'LazyElCarouselItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
    'LazyElCascader': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
    'LazyElCascaderPanel': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
    'LazyElCheckTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
    'LazyElCheckbox': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
    'LazyElCheckboxButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
    'LazyElCheckboxGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
    'LazyElCollapse': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
    'LazyElCol': LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
    'LazyElCollapseItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
    'LazyElCollapseTransition': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
    'LazyElCollection': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
    'LazyElCollectionItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
    'LazyElColorPicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
    'LazyElConfigProvider': LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
    'LazyElContainer': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
    'LazyElCountdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
    'LazyElDatePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
    'LazyElDescriptions': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
    'LazyElDescriptionsItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
    'LazyElDialog': LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
    'LazyElDivider': LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
    'LazyElDrawer': LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
    'LazyElDropdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
    'LazyElDropdownItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
    'LazyElDropdownMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
    'LazyElFooter': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
    'LazyElEmpty': LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
    'LazyElFormItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
    'LazyElForm': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
    'LazyElIcon': LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
    'LazyElHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
    'LazyElImageViewer': LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
    'LazyElImage': LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
    'LazyElInput': LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
    'LazyElInputNumber': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
    'LazyElInputTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
    'LazyElMain': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
    'LazyElLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
    'LazyElMention': LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
    'LazyElMenuItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
    'LazyElMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
    'LazyElOption': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
    'LazyElMenuItemGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
    'LazyElOptionGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
    'LazyElOverlay': LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
    'LazyElPageHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
    'LazyElPopover': LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
    'LazyElPopconfirm': LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
    'LazyElPagination': LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
    'LazyElPopper': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
    'LazyElPopperArrow': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
    'LazyElPopperContent': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
    'LazyElPopperTrigger': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
    'LazyElRadio': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
    'LazyElProgress': LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
    'LazyElRadioButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
    'LazyElRate': LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
    'LazyElRadioGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
    'LazyElResult': LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
    'LazyElRow': LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
    'LazyElSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
    'LazyElSelectV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
    'LazyElSegmented': LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
    'LazyElSkeleton': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
    'LazyElSkeletonItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
    'LazyElSpace': LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
    'LazyElStatistic': LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
    'LazyElSlider': LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
    'LazyElSteps': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
    'LazyElStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
    'LazyElScrollbar': LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
    'LazyElSubMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
    'LazyElSwitch': LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
    'LazyElTabPane': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
    'LazyElTable': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
    'LazyElTableV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
    'LazyElTableColumn': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
    'LazyElTabs': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
    'LazyElText': LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
    'LazyElTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
    'LazyElTimelineItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
    'LazyElTimePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
    'LazyElTimeline': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
    'LazyElTimeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
    'LazyElTourStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
    'LazyElTransfer': LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
    'LazyElTree': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
    'LazyElTooltip': LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
    'LazyElTreeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
    'LazyElTreeV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
    'LazyElUpload': LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
    'LazyElWatermark': LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
    'LazyElTour': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
    'LazyElIconAddLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
    'LazyElIconAim': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
    'LazyElIconAlarmClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
    'LazyElIconApple': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
    'LazyElIconArrowDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
    'LazyElIconArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
    'LazyElIconArrowDownBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
    'LazyElIconArrowRightBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
    'LazyElIconArrowLeftBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
    'LazyElIconArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
    'LazyElIconArrowUpBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
    'LazyElIconArrowUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
    'LazyElIconAvatar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
    'LazyElIconBasketball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
    'LazyElIconBell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
    'LazyElIconBaseball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
    'LazyElIconBack': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
    'LazyElIconBellFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
    'LazyElIconBicycle': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
    'LazyElIconBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
    'LazyElIconBottomLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
    'LazyElIconBottomRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
    'LazyElIconBowl': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
    'LazyElIconBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
    'LazyElIconBrush': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
    'LazyElIconBriefcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
    'LazyElIconBrushFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
    'LazyElIconBurger': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
    'LazyElIconCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
    'LazyElIconCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
    'LazyElIconCalendar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
    'LazyElIconCaretBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
    'LazyElIconCaretLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
    'LazyElIconCaretRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
    'LazyElIconCaretTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
    'LazyElIconChatDotRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
    'LazyElIconChatDotSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
    'LazyElBreadcrumb': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
    'LazyElIconCellphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
    'LazyElButtonGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
    'LazyElIconChatLineRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
    'LazyElBacktop': LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
    'LazyElIconChatLineSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
    'LazyElIconChatRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
    'LazyElIconChatSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
    'LazyElIconCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
    'LazyElIconChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
    'LazyElIconCherry': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
    'LazyElIconChicken': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
    'LazyElIconChromeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
    'LazyElIconCircleCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
    'LazyElIconCircleCheckFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
    'LazyElIconCircleCloseFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
    'LazyElIconCirclePlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
    'LazyElIconCircleClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
    'LazyElIconCirclePlusFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
    'LazyElIconClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
    'LazyElIconClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
    'LazyElIconCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
    'LazyElIconCloseBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
    'LazyElIconCoffee': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
    'LazyElIconCoffeeCup': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
    'LazyElIconCoin': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
    'LazyElIconColdDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
    'LazyElIconCollection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
    'LazyElIconCollectionTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
    'LazyElIconCompass': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
    'LazyElIconComment': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
    'LazyElIconConnection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
    'LazyElIconCoordinate': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
    'LazyElIconCpu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
    'LazyElIconCopyDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
    'LazyElIconCreditCard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
    'LazyElIconCrop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
    'LazyElIconDArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
    'LazyElIconDArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
    'LazyElIconDataAnalysis': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
    'LazyElIconDataBoard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
    'LazyElIconDCaret': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
    'LazyElIconDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
    'LazyElIconDataLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
    'LazyElIconDeleteFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
    'LazyElIconDessert': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
    'LazyElIconDeleteLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
    'LazyElIconDiscount': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
    'LazyElIconDish': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
    'LazyElIconDishDot': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
    'LazyElIconDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
    'LazyElIconDocumentAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
    'LazyElIconDocumentChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
    'LazyElIconDocumentCopy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
    'LazyElIconDocumentDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
    'LazyElIconDocumentRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
    'LazyElIconDownload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
    'LazyElIconDrizzling': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
    'LazyElIconEdit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
    'LazyElIconEleme': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
    'LazyElIconEditPen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
    'LazyElIconExpand': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
    'LazyElIconElementPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
    'LazyElIconElemeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
    'LazyElIconFailed': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
    'LazyElIconFemale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
    'LazyElIconFiles': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
    'LazyElIconFilm': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
    'LazyElIconFinished': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
    'LazyElIconFirstAidKit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
    'LazyElIconFlag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
    'LazyElIconFilter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
    'LazyElIconFold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
    'LazyElIconFolderAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
    'LazyElIconFolder': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
    'LazyElIconFolderChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
    'LazyElIconFolderDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
    'LazyElIconFolderRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
    'LazyElIconFolderOpened': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
    'LazyElIconFood': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
    'LazyElIconFootball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
    'LazyElIconFries': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
    'LazyElIconForkSpoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
    'LazyElIconGobletFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
    'LazyElIconGoblet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
    'LazyElIconGoldMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
    'LazyElIconFullScreen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
    'LazyElIconGobletSquareFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
    'LazyElIconGobletSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
    'LazyElIconGoods': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
    'LazyElIconGoodsFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
    'LazyElIconGrape': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
    'LazyElIconGuide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
    'LazyElIconHandbag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
    'LazyElIconGrid': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
    'LazyElIconHelp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
    'LazyElIconHeadset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
    'LazyElIconHide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
    'LazyElIconHelpFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
    'LazyElIconHotWater': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
    'LazyElIconHistogram': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
    'LazyElIconHomeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
    'LazyElIconIceCream': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
    'LazyElIconHouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
    'LazyElIconIceCreamRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
    'LazyElIconIceTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
    'LazyElIconIceCreamSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
    'LazyElIconIceDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
    'LazyElIconInfoFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
    'LazyElIconIphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
    'LazyElIconKey': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
    'LazyElIconKnifeFork': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
    'LazyElIconLightning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
    'LazyElIconList': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
    'LazyElIconLoading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
    'LazyElIconLink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
    'LazyElIconLocationInformation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
    'LazyElIconLollipop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
    'LazyElIconMagicStick': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
    'LazyElIconMagnet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
    'LazyElIconMale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
    'LazyElIconManagement': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
    'LazyElIconMapLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
    'LazyElIconLocationFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
    'LazyElIconLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
    'LazyElIconLock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
    'LazyElIconMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
    'LazyElIconMenu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
    'LazyElIconMessageBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
    'LazyElIconMessage': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
    'LazyElIconMemo': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
    'LazyElIconMic': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
    'LazyElIconMilkTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
    'LazyElIconMinus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
    'LazyElIconMicrophone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
    'LazyElIconMonitor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
    'LazyElIconMoney': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
    'LazyElIconMoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
    'LazyElIconMore': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
    'LazyElIconMoonNight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
    'LazyElIconMoreFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
    'LazyElIconMostlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
    'LazyElIconMouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
    'LazyElIconMuteNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
    'LazyElIconMug': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
    'LazyElIconNotebook': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
    'LazyElIconMute': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
    'LazyElIconNoSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
    'LazyElIconNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
    'LazyElIconOdometer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
    'LazyElIconOpen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
    'LazyElIconOfficeBuilding': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
    'LazyElIconOpportunity': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
    'LazyElIconOperation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
    'LazyElIconOrange': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
    'LazyElIconPaperclip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
    'LazyElIconPartlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
    'LazyElIconPear': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
    'LazyElIconPhoneFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
    'LazyElIconPhone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
    'LazyElIconPicture': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
    'LazyElIconPictureFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
    'LazyElIconPictureRounded': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
    'LazyElIconPieChart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
    'LazyElIconPlace': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
    'LazyElIconPlatform': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
    'LazyElIconPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
    'LazyElIconPointer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
    'LazyElIconPosition': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
    'LazyElIconPostcard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
    'LazyElIconPouring': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
    'LazyElIconPresent': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
    'LazyElIconPriceTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
    'LazyElIconPrinter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
    'LazyElIconQuartzWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
    'LazyElIconPromotion': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
    'LazyElIconReading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
    'LazyElIconReadingLamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
    'LazyElIconQuestionFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
    'LazyElIconRank': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
    'LazyElIconRefresh': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
    'LazyElIconRefreshLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
    'LazyElIconRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
    'LazyElIconRefrigerator': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
    'LazyElIconRemoveFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
    'LazyElIconRefreshRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
    'LazyElIconRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
    'LazyElIconScaleToOriginal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
    'LazyElIconSchool': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
    'LazyElIconSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
    'LazyElIconSearch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
    'LazyElIconScissor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
    'LazyElIconSell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
    'LazyElIconSemiSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
    'LazyElIconService': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
    'LazyElIconSetUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
    'LazyElIconShip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
    'LazyElIconShop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
    'LazyElIconShare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
    'LazyElIconShoppingBag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
    'LazyElIconSetting': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
    'LazyElIconShoppingCart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
    'LazyElIconShoppingCartFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
    'LazyElIconShoppingTrolley': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
    'LazyElIconSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
    'LazyElIconSoccer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
    'LazyElIconSoldOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
    'LazyElIconSort': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
    'LazyElIconSortDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
    'LazyElIconSortUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
    'LazyElIconStamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
    'LazyElIconStopwatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
    'LazyElIconStarFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
    'LazyElIconStar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
    'LazyElIconSuccessFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
    'LazyElIconSugar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
    'LazyElIconSuitcaseLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
    'LazyElIconSuitcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
    'LazyElIconSwitch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
    'LazyElIconSunny': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
    'LazyElIconSunset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
    'LazyElIconSunrise': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
    'LazyElIconSwitchButton': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
    'LazyElIconSwitchFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
    'LazyElIconTakeawayBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
    'LazyElIconTimer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
    'LazyElIconTickets': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
    'LazyElIconTicket': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
    'LazyElIconTools': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
    'LazyElIconToiletPaper': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
    'LazyElIconTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
    'LazyElIconTopLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
    'LazyElIconTopRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
    'LazyElIconTrendCharts': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
    'LazyElIconTrophy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
    'LazyElIconTrophyBase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
    'LazyElIconTurnOff': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
    'LazyElIconUmbrella': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
    'LazyElIconUpload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
    'LazyElIconUnlock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
    'LazyElIconUploadFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
    'LazyElIconUserFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
    'LazyElIconUser': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
    'LazyElIconVan': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
    'LazyElIconVideoCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
    'LazyElIconVideoCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
    'LazyElIconView': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
    'LazyElIconVideoPlay': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
    'LazyElIconVideoPause': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
    'LazyElIconWallet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
    'LazyElIconWalletFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
    'LazyElIconWarnTriangleFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
    'LazyElIconWarning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
    'LazyElIconWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
    'LazyElIconWarningFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
    'LazyElIconWatermelon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
    'LazyElIconWindPower': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
    'LazyElIconZoomIn': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
    'LazyElIconZoomOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
    'LazyElIcondefault': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Bookcard: typeof import("../components/Bookcard.vue")['default']
export const ColorMode: typeof import("../components/ColorMode.vue")['default']
export const Drawer: typeof import("../components/Drawer.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Navigation: typeof import("../components/Navigation.vue")['default']
export const PopularBook: typeof import("../components/PopularBook.vue")['default']
export const TitleBlock: typeof import("../components/TitleBlock.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const ElAffix: typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
export const ElAnchor: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
export const ElAlert: typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
export const ElAnchorLink: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
export const ElAside: typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
export const ElAutoResizer: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
export const ElAvatar: typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
export const ElBreadcrumbItem: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
export const ElAutocomplete: typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
export const ElBadge: typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
export const ElButton: typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
export const ElCard: typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
export const ElCalendar: typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
export const ElCarousel: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
export const ElCarouselItem: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
export const ElCascader: typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
export const ElCascaderPanel: typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
export const ElCheckTag: typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
export const ElCheckbox: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
export const ElCheckboxButton: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
export const ElCheckboxGroup: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
export const ElCollapse: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
export const ElCol: typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
export const ElCollapseItem: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
export const ElCollapseTransition: typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
export const ElCollection: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
export const ElCollectionItem: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
export const ElColorPicker: typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
export const ElConfigProvider: typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
export const ElContainer: typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
export const ElCountdown: typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
export const ElDatePicker: typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
export const ElDescriptions: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
export const ElDescriptionsItem: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
export const ElDialog: typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
export const ElDivider: typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
export const ElDrawer: typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
export const ElDropdown: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
export const ElDropdownItem: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
export const ElDropdownMenu: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
export const ElFooter: typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
export const ElEmpty: typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
export const ElFormItem: typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
export const ElForm: typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
export const ElIcon: typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
export const ElHeader: typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
export const ElImageViewer: typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
export const ElImage: typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
export const ElInput: typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
export const ElInputNumber: typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
export const ElInputTag: typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
export const ElMain: typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
export const ElLink: typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
export const ElMention: typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
export const ElMenuItem: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
export const ElMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
export const ElOption: typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
export const ElMenuItemGroup: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
export const ElOptionGroup: typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
export const ElOverlay: typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
export const ElPageHeader: typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
export const ElPopover: typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
export const ElPopconfirm: typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
export const ElPagination: typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
export const ElPopper: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
export const ElPopperArrow: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
export const ElPopperContent: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
export const ElPopperTrigger: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
export const ElRadio: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
export const ElProgress: typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
export const ElRadioButton: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
export const ElRate: typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
export const ElRadioGroup: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
export const ElResult: typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
export const ElRow: typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
export const ElSelect: typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
export const ElSelectV2: typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
export const ElSegmented: typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
export const ElSkeleton: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
export const ElSkeletonItem: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
export const ElSpace: typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
export const ElStatistic: typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
export const ElSlider: typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
export const ElSteps: typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
export const ElStep: typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
export const ElScrollbar: typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
export const ElSubMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
export const ElSwitch: typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
export const ElTabPane: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
export const ElTable: typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
export const ElTableV2: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
export const ElTableColumn: typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
export const ElTabs: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
export const ElText: typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
export const ElTag: typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
export const ElTimelineItem: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
export const ElTimePicker: typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
export const ElTimeline: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
export const ElTimeSelect: typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
export const ElTourStep: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
export const ElTransfer: typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
export const ElTree: typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
export const ElTooltip: typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
export const ElTreeSelect: typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
export const ElTreeV2: typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
export const ElUpload: typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
export const ElWatermark: typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
export const ElTour: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
export const ElIconAddLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
export const ElIconAim: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
export const ElIconAlarmClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
export const ElIconApple: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
export const ElIconArrowDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
export const ElIconArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
export const ElIconArrowDownBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
export const ElIconArrowRightBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
export const ElIconArrowLeftBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
export const ElIconArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
export const ElIconArrowUpBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
export const ElIconArrowUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
export const ElIconAvatar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
export const ElIconBasketball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
export const ElIconBell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
export const ElIconBaseball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
export const ElIconBack: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
export const ElIconBellFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
export const ElIconBicycle: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
export const ElIconBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
export const ElIconBottomLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
export const ElIconBottomRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
export const ElIconBowl: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
export const ElIconBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
export const ElIconBrush: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
export const ElIconBriefcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
export const ElIconBrushFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
export const ElIconBurger: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
export const ElIconCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
export const ElIconCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
export const ElIconCalendar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
export const ElIconCaretBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
export const ElIconCaretLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
export const ElIconCaretRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
export const ElIconCaretTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
export const ElIconChatDotRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
export const ElIconChatDotSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
export const ElBreadcrumb: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
export const ElIconCellphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
export const ElButtonGroup: typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
export const ElIconChatLineRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
export const ElBacktop: typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
export const ElIconChatLineSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
export const ElIconChatRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
export const ElIconChatSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
export const ElIconCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
export const ElIconChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
export const ElIconCherry: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
export const ElIconChicken: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
export const ElIconChromeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
export const ElIconCircleCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
export const ElIconCircleCheckFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
export const ElIconCircleCloseFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
export const ElIconCirclePlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
export const ElIconCircleClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
export const ElIconCirclePlusFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
export const ElIconClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
export const ElIconClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
export const ElIconCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
export const ElIconCloseBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
export const ElIconCoffee: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
export const ElIconCoffeeCup: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
export const ElIconCoin: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
export const ElIconColdDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
export const ElIconCollection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
export const ElIconCollectionTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
export const ElIconCompass: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
export const ElIconComment: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
export const ElIconConnection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
export const ElIconCoordinate: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
export const ElIconCpu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
export const ElIconCopyDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
export const ElIconCreditCard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
export const ElIconCrop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
export const ElIconDArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
export const ElIconDArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
export const ElIconDataAnalysis: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
export const ElIconDataBoard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
export const ElIconDCaret: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
export const ElIconDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
export const ElIconDataLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
export const ElIconDeleteFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
export const ElIconDessert: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
export const ElIconDeleteLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
export const ElIconDiscount: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
export const ElIconDish: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
export const ElIconDishDot: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
export const ElIconDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
export const ElIconDocumentAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
export const ElIconDocumentChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
export const ElIconDocumentCopy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
export const ElIconDocumentDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
export const ElIconDocumentRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
export const ElIconDownload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
export const ElIconDrizzling: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
export const ElIconEdit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
export const ElIconEleme: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
export const ElIconEditPen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
export const ElIconExpand: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
export const ElIconElementPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
export const ElIconElemeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
export const ElIconFailed: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
export const ElIconFemale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
export const ElIconFiles: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
export const ElIconFilm: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
export const ElIconFinished: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
export const ElIconFirstAidKit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
export const ElIconFlag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
export const ElIconFilter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
export const ElIconFold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
export const ElIconFolderAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
export const ElIconFolder: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
export const ElIconFolderChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
export const ElIconFolderDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
export const ElIconFolderRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
export const ElIconFolderOpened: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
export const ElIconFood: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
export const ElIconFootball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
export const ElIconFries: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
export const ElIconForkSpoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
export const ElIconGobletFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
export const ElIconGoblet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
export const ElIconGoldMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
export const ElIconFullScreen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
export const ElIconGobletSquareFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
export const ElIconGobletSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
export const ElIconGoods: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
export const ElIconGoodsFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
export const ElIconGrape: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
export const ElIconGuide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
export const ElIconHandbag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
export const ElIconGrid: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
export const ElIconHelp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
export const ElIconHeadset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
export const ElIconHide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
export const ElIconHelpFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
export const ElIconHotWater: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
export const ElIconHistogram: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
export const ElIconHomeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
export const ElIconIceCream: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
export const ElIconHouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
export const ElIconIceCreamRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
export const ElIconIceTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
export const ElIconIceCreamSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
export const ElIconIceDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
export const ElIconInfoFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
export const ElIconIphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
export const ElIconKey: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
export const ElIconKnifeFork: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
export const ElIconLightning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
export const ElIconList: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
export const ElIconLoading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
export const ElIconLink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
export const ElIconLocationInformation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
export const ElIconLollipop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
export const ElIconMagicStick: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
export const ElIconMagnet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
export const ElIconMale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
export const ElIconManagement: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
export const ElIconMapLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
export const ElIconLocationFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
export const ElIconLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
export const ElIconLock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
export const ElIconMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
export const ElIconMenu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
export const ElIconMessageBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
export const ElIconMessage: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
export const ElIconMemo: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
export const ElIconMic: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
export const ElIconMilkTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
export const ElIconMinus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
export const ElIconMicrophone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
export const ElIconMonitor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
export const ElIconMoney: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
export const ElIconMoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
export const ElIconMore: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
export const ElIconMoonNight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
export const ElIconMoreFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
export const ElIconMostlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
export const ElIconMouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
export const ElIconMuteNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
export const ElIconMug: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
export const ElIconNotebook: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
export const ElIconMute: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
export const ElIconNoSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
export const ElIconNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
export const ElIconOdometer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
export const ElIconOpen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
export const ElIconOfficeBuilding: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
export const ElIconOpportunity: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
export const ElIconOperation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
export const ElIconOrange: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
export const ElIconPaperclip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
export const ElIconPartlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
export const ElIconPear: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
export const ElIconPhoneFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
export const ElIconPhone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
export const ElIconPicture: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
export const ElIconPictureFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
export const ElIconPictureRounded: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
export const ElIconPieChart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
export const ElIconPlace: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
export const ElIconPlatform: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
export const ElIconPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
export const ElIconPointer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
export const ElIconPosition: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
export const ElIconPostcard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
export const ElIconPouring: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
export const ElIconPresent: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
export const ElIconPriceTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
export const ElIconPrinter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
export const ElIconQuartzWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
export const ElIconPromotion: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
export const ElIconReading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
export const ElIconReadingLamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
export const ElIconQuestionFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
export const ElIconRank: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
export const ElIconRefresh: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
export const ElIconRefreshLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
export const ElIconRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
export const ElIconRefrigerator: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
export const ElIconRemoveFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
export const ElIconRefreshRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
export const ElIconRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
export const ElIconScaleToOriginal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
export const ElIconSchool: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
export const ElIconSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
export const ElIconSearch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
export const ElIconScissor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
export const ElIconSell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
export const ElIconSemiSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
export const ElIconService: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
export const ElIconSetUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
export const ElIconShip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
export const ElIconShop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
export const ElIconShare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
export const ElIconShoppingBag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
export const ElIconSetting: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
export const ElIconShoppingCart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
export const ElIconShoppingCartFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
export const ElIconShoppingTrolley: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
export const ElIconSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
export const ElIconSoccer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
export const ElIconSoldOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
export const ElIconSort: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
export const ElIconSortDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
export const ElIconSortUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
export const ElIconStamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
export const ElIconStopwatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
export const ElIconStarFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
export const ElIconStar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
export const ElIconSuccessFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
export const ElIconSugar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
export const ElIconSuitcaseLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
export const ElIconSuitcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
export const ElIconSwitch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
export const ElIconSunny: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
export const ElIconSunset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
export const ElIconSunrise: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
export const ElIconSwitchButton: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
export const ElIconSwitchFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
export const ElIconTakeawayBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
export const ElIconTimer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
export const ElIconTickets: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
export const ElIconTicket: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
export const ElIconTools: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
export const ElIconToiletPaper: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
export const ElIconTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
export const ElIconTopLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
export const ElIconTopRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
export const ElIconTrendCharts: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
export const ElIconTrophy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
export const ElIconTrophyBase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
export const ElIconTurnOff: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
export const ElIconUmbrella: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
export const ElIconUpload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
export const ElIconUnlock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
export const ElIconUploadFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
export const ElIconUserFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
export const ElIconUser: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
export const ElIconVan: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
export const ElIconVideoCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
export const ElIconVideoCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
export const ElIconView: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
export const ElIconVideoPlay: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
export const ElIconVideoPause: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
export const ElIconWallet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
export const ElIconWalletFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
export const ElIconWarnTriangleFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
export const ElIconWarning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
export const ElIconWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
export const ElIconWarningFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
export const ElIconWatermelon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
export const ElIconWindPower: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
export const ElIconZoomIn: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
export const ElIconZoomOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
export const ElIcondefault: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBookcard: LazyComponent<typeof import("../components/Bookcard.vue")['default']>
export const LazyColorMode: LazyComponent<typeof import("../components/ColorMode.vue")['default']>
export const LazyDrawer: LazyComponent<typeof import("../components/Drawer.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyNavigation: LazyComponent<typeof import("../components/Navigation.vue")['default']>
export const LazyPopularBook: LazyComponent<typeof import("../components/PopularBook.vue")['default']>
export const LazyTitleBlock: LazyComponent<typeof import("../components/TitleBlock.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyElAffix: LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
export const LazyElAnchor: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
export const LazyElAlert: LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
export const LazyElAnchorLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
export const LazyElAside: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
export const LazyElAutoResizer: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
export const LazyElAvatar: LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
export const LazyElBreadcrumbItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
export const LazyElAutocomplete: LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
export const LazyElBadge: LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
export const LazyElButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
export const LazyElCard: LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
export const LazyElCalendar: LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
export const LazyElCarousel: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
export const LazyElCarouselItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
export const LazyElCascader: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
export const LazyElCascaderPanel: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
export const LazyElCheckTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
export const LazyElCheckbox: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
export const LazyElCheckboxButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
export const LazyElCheckboxGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
export const LazyElCollapse: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
export const LazyElCol: LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
export const LazyElCollapseItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
export const LazyElCollapseTransition: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
export const LazyElCollection: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
export const LazyElCollectionItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
export const LazyElColorPicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
export const LazyElConfigProvider: LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
export const LazyElContainer: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
export const LazyElCountdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
export const LazyElDatePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
export const LazyElDescriptions: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
export const LazyElDescriptionsItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
export const LazyElDialog: LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
export const LazyElDivider: LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
export const LazyElDrawer: LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
export const LazyElDropdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
export const LazyElDropdownItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
export const LazyElDropdownMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
export const LazyElFooter: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
export const LazyElEmpty: LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
export const LazyElFormItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
export const LazyElForm: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
export const LazyElIcon: LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
export const LazyElHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
export const LazyElImageViewer: LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
export const LazyElImage: LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
export const LazyElInput: LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
export const LazyElInputNumber: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
export const LazyElInputTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
export const LazyElMain: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
export const LazyElLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
export const LazyElMention: LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
export const LazyElMenuItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
export const LazyElMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
export const LazyElOption: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
export const LazyElMenuItemGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
export const LazyElOptionGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
export const LazyElOverlay: LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
export const LazyElPageHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
export const LazyElPopover: LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
export const LazyElPopconfirm: LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
export const LazyElPagination: LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
export const LazyElPopper: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
export const LazyElPopperArrow: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
export const LazyElPopperContent: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
export const LazyElPopperTrigger: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
export const LazyElRadio: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
export const LazyElProgress: LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
export const LazyElRadioButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
export const LazyElRate: LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
export const LazyElRadioGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
export const LazyElResult: LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
export const LazyElRow: LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
export const LazyElSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
export const LazyElSelectV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
export const LazyElSegmented: LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
export const LazyElSkeleton: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
export const LazyElSkeletonItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
export const LazyElSpace: LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
export const LazyElStatistic: LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
export const LazyElSlider: LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
export const LazyElSteps: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
export const LazyElStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
export const LazyElScrollbar: LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
export const LazyElSubMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
export const LazyElSwitch: LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
export const LazyElTabPane: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
export const LazyElTable: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
export const LazyElTableV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
export const LazyElTableColumn: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
export const LazyElTabs: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
export const LazyElText: LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
export const LazyElTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
export const LazyElTimelineItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
export const LazyElTimePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
export const LazyElTimeline: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
export const LazyElTimeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
export const LazyElTourStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
export const LazyElTransfer: LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
export const LazyElTree: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
export const LazyElTooltip: LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
export const LazyElTreeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
export const LazyElTreeV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
export const LazyElUpload: LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
export const LazyElWatermark: LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
export const LazyElTour: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
export const LazyElIconAddLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
export const LazyElIconAim: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
export const LazyElIconAlarmClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
export const LazyElIconApple: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
export const LazyElIconArrowDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
export const LazyElIconArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
export const LazyElIconArrowDownBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
export const LazyElIconArrowRightBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
export const LazyElIconArrowLeftBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
export const LazyElIconArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
export const LazyElIconArrowUpBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
export const LazyElIconArrowUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
export const LazyElIconAvatar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
export const LazyElIconBasketball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
export const LazyElIconBell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
export const LazyElIconBaseball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
export const LazyElIconBack: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
export const LazyElIconBellFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
export const LazyElIconBicycle: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
export const LazyElIconBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
export const LazyElIconBottomLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
export const LazyElIconBottomRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
export const LazyElIconBowl: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
export const LazyElIconBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
export const LazyElIconBrush: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
export const LazyElIconBriefcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
export const LazyElIconBrushFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
export const LazyElIconBurger: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
export const LazyElIconCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
export const LazyElIconCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
export const LazyElIconCalendar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
export const LazyElIconCaretBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
export const LazyElIconCaretLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
export const LazyElIconCaretRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
export const LazyElIconCaretTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
export const LazyElIconChatDotRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
export const LazyElIconChatDotSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
export const LazyElBreadcrumb: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
export const LazyElIconCellphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
export const LazyElButtonGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
export const LazyElIconChatLineRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
export const LazyElBacktop: LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
export const LazyElIconChatLineSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
export const LazyElIconChatRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
export const LazyElIconChatSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
export const LazyElIconCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
export const LazyElIconChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
export const LazyElIconCherry: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
export const LazyElIconChicken: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
export const LazyElIconChromeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
export const LazyElIconCircleCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
export const LazyElIconCircleCheckFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
export const LazyElIconCircleCloseFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
export const LazyElIconCirclePlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
export const LazyElIconCircleClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
export const LazyElIconCirclePlusFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
export const LazyElIconClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
export const LazyElIconClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
export const LazyElIconCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
export const LazyElIconCloseBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
export const LazyElIconCoffee: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
export const LazyElIconCoffeeCup: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
export const LazyElIconCoin: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
export const LazyElIconColdDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
export const LazyElIconCollection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
export const LazyElIconCollectionTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
export const LazyElIconCompass: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
export const LazyElIconComment: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
export const LazyElIconConnection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
export const LazyElIconCoordinate: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
export const LazyElIconCpu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
export const LazyElIconCopyDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
export const LazyElIconCreditCard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
export const LazyElIconCrop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
export const LazyElIconDArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
export const LazyElIconDArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
export const LazyElIconDataAnalysis: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
export const LazyElIconDataBoard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
export const LazyElIconDCaret: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
export const LazyElIconDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
export const LazyElIconDataLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
export const LazyElIconDeleteFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
export const LazyElIconDessert: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
export const LazyElIconDeleteLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
export const LazyElIconDiscount: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
export const LazyElIconDish: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
export const LazyElIconDishDot: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
export const LazyElIconDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
export const LazyElIconDocumentAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
export const LazyElIconDocumentChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
export const LazyElIconDocumentCopy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
export const LazyElIconDocumentDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
export const LazyElIconDocumentRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
export const LazyElIconDownload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
export const LazyElIconDrizzling: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
export const LazyElIconEdit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
export const LazyElIconEleme: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
export const LazyElIconEditPen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
export const LazyElIconExpand: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
export const LazyElIconElementPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
export const LazyElIconElemeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
export const LazyElIconFailed: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
export const LazyElIconFemale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
export const LazyElIconFiles: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
export const LazyElIconFilm: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
export const LazyElIconFinished: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
export const LazyElIconFirstAidKit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
export const LazyElIconFlag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
export const LazyElIconFilter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
export const LazyElIconFold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
export const LazyElIconFolderAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
export const LazyElIconFolder: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
export const LazyElIconFolderChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
export const LazyElIconFolderDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
export const LazyElIconFolderRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
export const LazyElIconFolderOpened: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
export const LazyElIconFood: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
export const LazyElIconFootball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
export const LazyElIconFries: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
export const LazyElIconForkSpoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
export const LazyElIconGobletFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
export const LazyElIconGoblet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
export const LazyElIconGoldMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
export const LazyElIconFullScreen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
export const LazyElIconGobletSquareFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
export const LazyElIconGobletSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
export const LazyElIconGoods: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
export const LazyElIconGoodsFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
export const LazyElIconGrape: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
export const LazyElIconGuide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
export const LazyElIconHandbag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
export const LazyElIconGrid: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
export const LazyElIconHelp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
export const LazyElIconHeadset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
export const LazyElIconHide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
export const LazyElIconHelpFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
export const LazyElIconHotWater: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
export const LazyElIconHistogram: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
export const LazyElIconHomeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
export const LazyElIconIceCream: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
export const LazyElIconHouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
export const LazyElIconIceCreamRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
export const LazyElIconIceTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
export const LazyElIconIceCreamSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
export const LazyElIconIceDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
export const LazyElIconInfoFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
export const LazyElIconIphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
export const LazyElIconKey: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
export const LazyElIconKnifeFork: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
export const LazyElIconLightning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
export const LazyElIconList: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
export const LazyElIconLoading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
export const LazyElIconLink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
export const LazyElIconLocationInformation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
export const LazyElIconLollipop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
export const LazyElIconMagicStick: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
export const LazyElIconMagnet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
export const LazyElIconMale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
export const LazyElIconManagement: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
export const LazyElIconMapLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
export const LazyElIconLocationFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
export const LazyElIconLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
export const LazyElIconLock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
export const LazyElIconMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
export const LazyElIconMenu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
export const LazyElIconMessageBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
export const LazyElIconMessage: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
export const LazyElIconMemo: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
export const LazyElIconMic: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
export const LazyElIconMilkTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
export const LazyElIconMinus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
export const LazyElIconMicrophone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
export const LazyElIconMonitor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
export const LazyElIconMoney: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
export const LazyElIconMoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
export const LazyElIconMore: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
export const LazyElIconMoonNight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
export const LazyElIconMoreFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
export const LazyElIconMostlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
export const LazyElIconMouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
export const LazyElIconMuteNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
export const LazyElIconMug: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
export const LazyElIconNotebook: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
export const LazyElIconMute: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
export const LazyElIconNoSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
export const LazyElIconNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
export const LazyElIconOdometer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
export const LazyElIconOpen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
export const LazyElIconOfficeBuilding: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
export const LazyElIconOpportunity: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
export const LazyElIconOperation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
export const LazyElIconOrange: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
export const LazyElIconPaperclip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
export const LazyElIconPartlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
export const LazyElIconPear: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
export const LazyElIconPhoneFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
export const LazyElIconPhone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
export const LazyElIconPicture: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
export const LazyElIconPictureFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
export const LazyElIconPictureRounded: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
export const LazyElIconPieChart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
export const LazyElIconPlace: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
export const LazyElIconPlatform: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
export const LazyElIconPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
export const LazyElIconPointer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
export const LazyElIconPosition: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
export const LazyElIconPostcard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
export const LazyElIconPouring: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
export const LazyElIconPresent: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
export const LazyElIconPriceTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
export const LazyElIconPrinter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
export const LazyElIconQuartzWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
export const LazyElIconPromotion: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
export const LazyElIconReading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
export const LazyElIconReadingLamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
export const LazyElIconQuestionFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
export const LazyElIconRank: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
export const LazyElIconRefresh: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
export const LazyElIconRefreshLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
export const LazyElIconRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
export const LazyElIconRefrigerator: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
export const LazyElIconRemoveFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
export const LazyElIconRefreshRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
export const LazyElIconRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
export const LazyElIconScaleToOriginal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
export const LazyElIconSchool: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
export const LazyElIconSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
export const LazyElIconSearch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
export const LazyElIconScissor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
export const LazyElIconSell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
export const LazyElIconSemiSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
export const LazyElIconService: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
export const LazyElIconSetUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
export const LazyElIconShip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
export const LazyElIconShop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
export const LazyElIconShare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
export const LazyElIconShoppingBag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
export const LazyElIconSetting: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
export const LazyElIconShoppingCart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
export const LazyElIconShoppingCartFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
export const LazyElIconShoppingTrolley: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
export const LazyElIconSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
export const LazyElIconSoccer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
export const LazyElIconSoldOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
export const LazyElIconSort: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
export const LazyElIconSortDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
export const LazyElIconSortUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
export const LazyElIconStamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
export const LazyElIconStopwatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
export const LazyElIconStarFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
export const LazyElIconStar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
export const LazyElIconSuccessFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
export const LazyElIconSugar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
export const LazyElIconSuitcaseLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
export const LazyElIconSuitcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
export const LazyElIconSwitch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
export const LazyElIconSunny: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
export const LazyElIconSunset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
export const LazyElIconSunrise: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
export const LazyElIconSwitchButton: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
export const LazyElIconSwitchFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
export const LazyElIconTakeawayBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
export const LazyElIconTimer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
export const LazyElIconTickets: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
export const LazyElIconTicket: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
export const LazyElIconTools: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
export const LazyElIconToiletPaper: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
export const LazyElIconTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
export const LazyElIconTopLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
export const LazyElIconTopRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
export const LazyElIconTrendCharts: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
export const LazyElIconTrophy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
export const LazyElIconTrophyBase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
export const LazyElIconTurnOff: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
export const LazyElIconUmbrella: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
export const LazyElIconUpload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
export const LazyElIconUnlock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
export const LazyElIconUploadFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
export const LazyElIconUserFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
export const LazyElIconUser: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
export const LazyElIconVan: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
export const LazyElIconVideoCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
export const LazyElIconVideoCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
export const LazyElIconView: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
export const LazyElIconVideoPlay: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
export const LazyElIconVideoPause: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
export const LazyElIconWallet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
export const LazyElIconWalletFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
export const LazyElIconWarnTriangleFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
export const LazyElIconWarning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
export const LazyElIconWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
export const LazyElIconWarningFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
export const LazyElIconWatermelon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
export const LazyElIconWindPower: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
export const LazyElIconZoomIn: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
export const LazyElIconZoomOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
export const LazyElIcondefault: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
