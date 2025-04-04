
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
    'ElAnchor': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
    'ElAlert': typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
    'ElAffix': typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
    'ElAutocomplete': typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
    'ElAvatar': typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
    'ElAutoResizer': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
    'ElBadge': typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
    'ElBreadcrumbItem': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
    'ElBreadcrumb': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
    'ElBacktop': typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
    'ElButtonGroup': typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
    'ElButton': typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
    'ElCard': typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
    'ElCalendar': typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
    'ElCascader': typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
    'ElCarouselItem': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
    'ElCarousel': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
    'ElCheckTag': typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
    'ElCascaderPanel': typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
    'ElCheckbox': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
    'ElCheckboxButton': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
    'ElCol': typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
    'ElCollapse': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
    'ElAnchorLink': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
    'ElCheckboxGroup': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
    'ElCollapseItem': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
    'ElAside': typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
    'ElCollection': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
    'ElCollectionItem': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
    'ElConfigProvider': typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
    'ElCollapseTransition': typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
    'ElCountdown': typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
    'ElContainer': typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
    'ElColorPicker': typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
    'ElDialog': typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
    'ElDatePicker': typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
    'ElDescriptions': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
    'ElDescriptionsItem': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
    'ElDivider': typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
    'ElDrawer': typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
    'ElDropdownItem': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
    'ElForm': typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
    'ElEmpty': typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
    'ElDropdown': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
    'ElImageViewer': typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
    'ElDropdownMenu': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
    'ElFormItem': typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
    'ElInput': typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
    'ElHeader': typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
    'ElFooter': typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
    'ElInputNumber': typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
    'ElMention': typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
    'ElIcon': typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
    'ElLink': typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
    'ElMain': typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
    'ElImage': typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
    'ElOptionGroup': typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
    'ElInputTag': typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
    'ElMenuItemGroup': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
    'ElMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
    'ElOverlay': typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
    'ElOption': typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
    'ElMenuItem': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
    'ElPopconfirm': typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
    'ElPageHeader': typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
    'ElPagination': typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
    'ElPopperContent': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
    'ElPopover': typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
    'ElPopperTrigger': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
    'ElPopperArrow': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
    'ElProgress': typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
    'ElRadioButton': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
    'ElPopper': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
    'ElRadio': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
    'ElRate': typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
    'ElResult': typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
    'ElRow': typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
    'ElRadioGroup': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
    'ElScrollbar': typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
    'ElSelect': typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
    'ElSelectV2': typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
    'ElSegmented': typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
    'ElSkeleton': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
    'ElSlider': typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
    'ElStep': typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
    'ElSteps': typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
    'ElStatistic': typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
    'ElSkeletonItem': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
    'ElSpace': typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
    'ElSwitch': typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
    'ElTabPane': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
    'ElSubMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
    'ElTableV2': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
    'ElTableColumn': typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
    'ElTag': typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
    'ElText': typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
    'ElTimeSelect': typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
    'ElTabs': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
    'ElTimelineItem': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
    'ElTooltip': typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
    'ElTimePicker': typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
    'ElTimeline': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
    'ElTable': typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
    'ElTour': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
    'ElTransfer': typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
    'ElTourStep': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
    'ElTreeSelect': typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
    'ElIconAddLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
    'ElWatermark': typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
    'ElTree': typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
    'ElUpload': typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
    'ElIconAim': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
    'ElIconArrowDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
    'ElTreeV2': typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
    'ElIconArrowDownBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
    'ElIconApple': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
    'ElIconAlarmClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
    'ElIconArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
    'ElIconArrowUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
    'ElIconArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
    'ElIconArrowRightBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
    'ElIconArrowLeftBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
    'ElIconBaseball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
    'ElIconAvatar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
    'ElIconBack': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
    'ElIconArrowUpBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
    'ElIconBasketball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
    'ElIconBell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
    'ElIconBicycle': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
    'ElIconBowl': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
    'ElIconBellFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
    'ElIconBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
    'ElIconBottomRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
    'ElIconBottomLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
    'ElIconBriefcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
    'ElIconBrushFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
    'ElIconBrush': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
    'ElIconBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
    'ElIconBurger': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
    'ElIconCalendar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
    'ElIconCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
    'ElIconCaretBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
    'ElIconCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
    'ElIconCaretLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
    'ElIconCaretRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
    'ElIconCaretTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
    'ElIconChatDotRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
    'ElIconCellphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
    'ElIconChatLineRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
    'ElIconChatLineSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
    'ElIconChatDotSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
    'ElIconChatSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
    'ElIconChatRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
    'ElIconChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
    'ElIconCherry': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
    'ElIconCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
    'ElIconChicken': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
    'ElIconCircleCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
    'ElIconCircleCheckFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
    'ElIconCirclePlusFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
    'ElIconCirclePlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
    'ElIconCircleClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
    'ElIconCircleCloseFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
    'ElIconClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
    'ElIconClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
    'ElIconCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
    'ElIconCloseBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
    'ElIconCoffee': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
    'ElIconCoffeeCup': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
    'ElIconCoin': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
    'ElIconColdDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
    'ElIconCollection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
    'ElIconComment': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
    'ElIconCollectionTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
    'ElIconCompass': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
    'ElIconChromeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
    'ElIconCoordinate': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
    'ElIconCopyDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
    'ElIconCreditCard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
    'ElIconCrop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
    'ElIconDArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
    'ElIconDCaret': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
    'ElIconDArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
    'ElIconCpu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
    'ElIconDataAnalysis': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
    'ElIconConnection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
    'ElIconDataBoard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
    'ElIconDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
    'ElIconDeleteFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
    'ElIconDataLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
    'ElIconDeleteLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
    'ElIconDiscount': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
    'ElIconDessert': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
    'ElIconDishDot': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
    'ElIconDocumentChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
    'ElIconDish': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
    'ElIconDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
    'ElIconDocumentAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
    'ElIconDocumentRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
    'ElIconDocumentDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
    'ElIconDownload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
    'ElIconDocumentCopy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
    'ElIconEleme': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
    'ElIconEditPen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
    'ElIconDrizzling': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
    'ElIconExpand': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
    'ElIconElemeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
    'ElIconElementPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
    'ElIconEdit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
    'ElIconFailed': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
    'ElIconFemale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
    'ElIconFilter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
    'ElIconFilm': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
    'ElIconFirstAidKit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
    'ElIconFiles': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
    'ElIconFinished': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
    'ElIconFold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
    'ElIconFlag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
    'ElIconFolderDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
    'ElIconFolderAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
    'ElIconFolder': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
    'ElIconFolderChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
    'ElIconFood': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
    'ElIconFolderOpened': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
    'ElIconForkSpoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
    'ElIconFolderRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
    'ElIconFootball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
    'ElIconFullScreen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
    'ElIconFries': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
    'ElIconGobletSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
    'ElIconGoblet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
    'ElIconGobletFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
    'ElIconGoods': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
    'ElIconGoldMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
    'ElIconGobletSquareFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
    'ElIconGoodsFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
    'ElIconGrid': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
    'ElIconGrape': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
    'ElIconHandbag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
    'ElIconHeadset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
    'ElIconHelp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
    'ElIconGuide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
    'ElIconHouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
    'ElIconHide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
    'ElIconHomeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
    'ElIconHelpFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
    'ElIconHistogram': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
    'ElIconIceCreamRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
    'ElIconIceCream': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
    'ElIconHotWater': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
    'ElIconIceCreamSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
    'ElIconIceTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
    'ElIconKnifeFork': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
    'ElIconLightning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
    'ElIconInfoFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
    'ElIconIphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
    'ElIconIceDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
    'ElIconKey': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
    'ElIconLink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
    'ElIconList': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
    'ElIconLoading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
    'ElIconLocationInformation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
    'ElIconLock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
    'ElIconLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
    'ElIconMagnet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
    'ElIconLocationFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
    'ElIconLollipop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
    'ElIconMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
    'ElIconMale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
    'ElIconMagicStick': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
    'ElIconMemo': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
    'ElIconMessage': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
    'ElIconManagement': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
    'ElIconMapLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
    'ElIconMenu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
    'ElIconMessageBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
    'ElIconMicrophone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
    'ElIconMic': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
    'ElIconMilkTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
    'ElIconMoney': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
    'ElIconMinus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
    'ElIconMoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
    'ElIconMoonNight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
    'ElIconMore': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
    'ElIconMouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
    'ElIconMostlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
    'ElIconMoreFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
    'ElIconMute': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
    'ElIconMonitor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
    'ElIconMug': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
    'ElIconNoSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
    'ElIconNotebook': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
    'ElIconOdometer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
    'ElIconMuteNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
    'ElIconNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
    'ElIconOfficeBuilding': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
    'ElIconOpportunity': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
    'ElIconPaperclip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
    'ElIconOrange': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
    'ElIconOperation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
    'ElIconPhone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
    'ElIconPear': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
    'ElIconPartlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
    'ElIconPictureRounded': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
    'ElIconPicture': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
    'ElIconOpen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
    'ElIconPhoneFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
    'ElIconPictureFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
    'ElIconPieChart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
    'ElIconPlatform': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
    'ElIconPosition': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
    'ElIconPlace': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
    'ElIconPouring': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
    'ElIconPriceTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
    'ElIconPointer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
    'ElIconPresent': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
    'ElIconPostcard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
    'ElIconPrinter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
    'ElIconQuestionFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
    'ElIconPromotion': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
    'ElIconPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
    'ElIconQuartzWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
    'ElIconRank': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
    'ElIconReadingLamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
    'ElIconRefreshRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
    'ElIconReading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
    'ElIconRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
    'ElIconRefresh': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
    'ElIconRefreshLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
    'ElIconRefrigerator': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
    'ElIconRemoveFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
    'ElIconSchool': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
    'ElIconScaleToOriginal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
    'ElIconSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
    'ElIconSemiSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
    'ElIconSetUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
    'ElIconSearch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
    'ElIconSell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
    'ElIconSetting': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
    'ElIconScissor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
    'ElIconService': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
    'ElIconShare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
    'ElIconRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
    'ElIconShip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
    'ElIconShoppingCart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
    'ElIconShop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
    'ElIconShoppingBag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
    'ElIconShoppingTrolley': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
    'ElIconShoppingCartFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
    'ElIconSoldOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
    'ElIconSoccer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
    'ElIconSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
    'ElIconSort': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
    'ElIconSortUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
    'ElIconSortDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
    'ElIconStar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
    'ElIconStamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
    'ElIconSuccessFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
    'ElIconStopwatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
    'ElIconStarFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
    'ElIconSuitcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
    'ElIconSugar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
    'ElIconSunny': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
    'ElIconSuitcaseLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
    'ElIconSunrise': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
    'ElIconSwitchFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
    'ElIconSwitchButton': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
    'ElIconSwitch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
    'ElIconSunset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
    'ElIconTakeawayBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
    'ElIconTickets': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
    'ElIconToiletPaper': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
    'ElIconTimer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
    'ElIconTicket': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
    'ElIconTopLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
    'ElIconTopRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
    'ElIconTools': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
    'ElIconTrendCharts': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
    'ElIconTrophy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
    'ElIconTrophyBase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
    'ElIconTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
    'ElIconTurnOff': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
    'ElIconUpload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
    'ElIconUnlock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
    'ElIconUmbrella': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
    'ElIconVan': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
    'ElIconUploadFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
    'ElIconUserFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
    'ElIconVideoCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
    'ElIconUser': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
    'ElIconVideoPause': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
    'ElIconWallet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
    'ElIconWalletFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
    'ElIconVideoCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
    'ElIconView': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
    'ElIconVideoPlay': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
    'ElIconWarnTriangleFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
    'ElIconWindPower': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
    'ElIconWarningFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
    'ElIconWarning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
    'ElIconZoomIn': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
    'ElIconWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
    'ElIcondefault': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']
    'ElIconZoomOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
    'ElIconWatermelon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
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
    'LazyElAnchor': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
    'LazyElAlert': LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
    'LazyElAffix': LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
    'LazyElAutocomplete': LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
    'LazyElAvatar': LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
    'LazyElAutoResizer': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
    'LazyElBadge': LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
    'LazyElBreadcrumbItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
    'LazyElBreadcrumb': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
    'LazyElBacktop': LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
    'LazyElButtonGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
    'LazyElButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
    'LazyElCard': LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
    'LazyElCalendar': LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
    'LazyElCascader': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
    'LazyElCarouselItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
    'LazyElCarousel': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
    'LazyElCheckTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
    'LazyElCascaderPanel': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
    'LazyElCheckbox': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
    'LazyElCheckboxButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
    'LazyElCol': LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
    'LazyElCollapse': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
    'LazyElAnchorLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
    'LazyElCheckboxGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
    'LazyElCollapseItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
    'LazyElAside': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
    'LazyElCollection': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
    'LazyElCollectionItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
    'LazyElConfigProvider': LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
    'LazyElCollapseTransition': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
    'LazyElCountdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
    'LazyElContainer': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
    'LazyElColorPicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
    'LazyElDialog': LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
    'LazyElDatePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
    'LazyElDescriptions': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
    'LazyElDescriptionsItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
    'LazyElDivider': LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
    'LazyElDrawer': LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
    'LazyElDropdownItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
    'LazyElForm': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
    'LazyElEmpty': LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
    'LazyElDropdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
    'LazyElImageViewer': LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
    'LazyElDropdownMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
    'LazyElFormItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
    'LazyElInput': LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
    'LazyElHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
    'LazyElFooter': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
    'LazyElInputNumber': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
    'LazyElMention': LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
    'LazyElIcon': LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
    'LazyElLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
    'LazyElMain': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
    'LazyElImage': LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
    'LazyElOptionGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
    'LazyElInputTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
    'LazyElMenuItemGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
    'LazyElMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
    'LazyElOverlay': LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
    'LazyElOption': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
    'LazyElMenuItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
    'LazyElPopconfirm': LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
    'LazyElPageHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
    'LazyElPagination': LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
    'LazyElPopperContent': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
    'LazyElPopover': LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
    'LazyElPopperTrigger': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
    'LazyElPopperArrow': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
    'LazyElProgress': LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
    'LazyElRadioButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
    'LazyElPopper': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
    'LazyElRadio': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
    'LazyElRate': LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
    'LazyElResult': LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
    'LazyElRow': LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
    'LazyElRadioGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
    'LazyElScrollbar': LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
    'LazyElSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
    'LazyElSelectV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
    'LazyElSegmented': LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
    'LazyElSkeleton': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
    'LazyElSlider': LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
    'LazyElStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
    'LazyElSteps': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
    'LazyElStatistic': LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
    'LazyElSkeletonItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
    'LazyElSpace': LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
    'LazyElSwitch': LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
    'LazyElTabPane': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
    'LazyElSubMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
    'LazyElTableV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
    'LazyElTableColumn': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
    'LazyElTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
    'LazyElText': LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
    'LazyElTimeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
    'LazyElTabs': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
    'LazyElTimelineItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
    'LazyElTooltip': LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
    'LazyElTimePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
    'LazyElTimeline': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
    'LazyElTable': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
    'LazyElTour': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
    'LazyElTransfer': LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
    'LazyElTourStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
    'LazyElTreeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
    'LazyElIconAddLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
    'LazyElWatermark': LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
    'LazyElTree': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
    'LazyElUpload': LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
    'LazyElIconAim': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
    'LazyElIconArrowDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
    'LazyElTreeV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
    'LazyElIconArrowDownBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
    'LazyElIconApple': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
    'LazyElIconAlarmClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
    'LazyElIconArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
    'LazyElIconArrowUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
    'LazyElIconArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
    'LazyElIconArrowRightBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
    'LazyElIconArrowLeftBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
    'LazyElIconBaseball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
    'LazyElIconAvatar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
    'LazyElIconBack': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
    'LazyElIconArrowUpBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
    'LazyElIconBasketball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
    'LazyElIconBell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
    'LazyElIconBicycle': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
    'LazyElIconBowl': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
    'LazyElIconBellFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
    'LazyElIconBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
    'LazyElIconBottomRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
    'LazyElIconBottomLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
    'LazyElIconBriefcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
    'LazyElIconBrushFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
    'LazyElIconBrush': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
    'LazyElIconBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
    'LazyElIconBurger': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
    'LazyElIconCalendar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
    'LazyElIconCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
    'LazyElIconCaretBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
    'LazyElIconCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
    'LazyElIconCaretLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
    'LazyElIconCaretRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
    'LazyElIconCaretTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
    'LazyElIconChatDotRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
    'LazyElIconCellphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
    'LazyElIconChatLineRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
    'LazyElIconChatLineSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
    'LazyElIconChatDotSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
    'LazyElIconChatSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
    'LazyElIconChatRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
    'LazyElIconChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
    'LazyElIconCherry': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
    'LazyElIconCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
    'LazyElIconChicken': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
    'LazyElIconCircleCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
    'LazyElIconCircleCheckFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
    'LazyElIconCirclePlusFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
    'LazyElIconCirclePlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
    'LazyElIconCircleClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
    'LazyElIconCircleCloseFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
    'LazyElIconClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
    'LazyElIconClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
    'LazyElIconCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
    'LazyElIconCloseBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
    'LazyElIconCoffee': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
    'LazyElIconCoffeeCup': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
    'LazyElIconCoin': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
    'LazyElIconColdDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
    'LazyElIconCollection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
    'LazyElIconComment': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
    'LazyElIconCollectionTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
    'LazyElIconCompass': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
    'LazyElIconChromeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
    'LazyElIconCoordinate': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
    'LazyElIconCopyDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
    'LazyElIconCreditCard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
    'LazyElIconCrop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
    'LazyElIconDArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
    'LazyElIconDCaret': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
    'LazyElIconDArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
    'LazyElIconCpu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
    'LazyElIconDataAnalysis': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
    'LazyElIconConnection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
    'LazyElIconDataBoard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
    'LazyElIconDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
    'LazyElIconDeleteFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
    'LazyElIconDataLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
    'LazyElIconDeleteLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
    'LazyElIconDiscount': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
    'LazyElIconDessert': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
    'LazyElIconDishDot': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
    'LazyElIconDocumentChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
    'LazyElIconDish': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
    'LazyElIconDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
    'LazyElIconDocumentAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
    'LazyElIconDocumentRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
    'LazyElIconDocumentDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
    'LazyElIconDownload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
    'LazyElIconDocumentCopy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
    'LazyElIconEleme': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
    'LazyElIconEditPen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
    'LazyElIconDrizzling': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
    'LazyElIconExpand': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
    'LazyElIconElemeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
    'LazyElIconElementPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
    'LazyElIconEdit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
    'LazyElIconFailed': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
    'LazyElIconFemale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
    'LazyElIconFilter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
    'LazyElIconFilm': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
    'LazyElIconFirstAidKit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
    'LazyElIconFiles': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
    'LazyElIconFinished': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
    'LazyElIconFold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
    'LazyElIconFlag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
    'LazyElIconFolderDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
    'LazyElIconFolderAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
    'LazyElIconFolder': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
    'LazyElIconFolderChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
    'LazyElIconFood': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
    'LazyElIconFolderOpened': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
    'LazyElIconForkSpoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
    'LazyElIconFolderRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
    'LazyElIconFootball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
    'LazyElIconFullScreen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
    'LazyElIconFries': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
    'LazyElIconGobletSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
    'LazyElIconGoblet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
    'LazyElIconGobletFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
    'LazyElIconGoods': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
    'LazyElIconGoldMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
    'LazyElIconGobletSquareFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
    'LazyElIconGoodsFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
    'LazyElIconGrid': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
    'LazyElIconGrape': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
    'LazyElIconHandbag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
    'LazyElIconHeadset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
    'LazyElIconHelp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
    'LazyElIconGuide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
    'LazyElIconHouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
    'LazyElIconHide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
    'LazyElIconHomeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
    'LazyElIconHelpFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
    'LazyElIconHistogram': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
    'LazyElIconIceCreamRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
    'LazyElIconIceCream': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
    'LazyElIconHotWater': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
    'LazyElIconIceCreamSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
    'LazyElIconIceTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
    'LazyElIconKnifeFork': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
    'LazyElIconLightning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
    'LazyElIconInfoFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
    'LazyElIconIphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
    'LazyElIconIceDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
    'LazyElIconKey': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
    'LazyElIconLink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
    'LazyElIconList': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
    'LazyElIconLoading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
    'LazyElIconLocationInformation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
    'LazyElIconLock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
    'LazyElIconLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
    'LazyElIconMagnet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
    'LazyElIconLocationFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
    'LazyElIconLollipop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
    'LazyElIconMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
    'LazyElIconMale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
    'LazyElIconMagicStick': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
    'LazyElIconMemo': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
    'LazyElIconMessage': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
    'LazyElIconManagement': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
    'LazyElIconMapLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
    'LazyElIconMenu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
    'LazyElIconMessageBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
    'LazyElIconMicrophone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
    'LazyElIconMic': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
    'LazyElIconMilkTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
    'LazyElIconMoney': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
    'LazyElIconMinus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
    'LazyElIconMoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
    'LazyElIconMoonNight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
    'LazyElIconMore': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
    'LazyElIconMouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
    'LazyElIconMostlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
    'LazyElIconMoreFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
    'LazyElIconMute': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
    'LazyElIconMonitor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
    'LazyElIconMug': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
    'LazyElIconNoSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
    'LazyElIconNotebook': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
    'LazyElIconOdometer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
    'LazyElIconMuteNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
    'LazyElIconNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
    'LazyElIconOfficeBuilding': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
    'LazyElIconOpportunity': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
    'LazyElIconPaperclip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
    'LazyElIconOrange': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
    'LazyElIconOperation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
    'LazyElIconPhone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
    'LazyElIconPear': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
    'LazyElIconPartlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
    'LazyElIconPictureRounded': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
    'LazyElIconPicture': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
    'LazyElIconOpen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
    'LazyElIconPhoneFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
    'LazyElIconPictureFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
    'LazyElIconPieChart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
    'LazyElIconPlatform': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
    'LazyElIconPosition': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
    'LazyElIconPlace': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
    'LazyElIconPouring': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
    'LazyElIconPriceTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
    'LazyElIconPointer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
    'LazyElIconPresent': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
    'LazyElIconPostcard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
    'LazyElIconPrinter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
    'LazyElIconQuestionFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
    'LazyElIconPromotion': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
    'LazyElIconPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
    'LazyElIconQuartzWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
    'LazyElIconRank': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
    'LazyElIconReadingLamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
    'LazyElIconRefreshRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
    'LazyElIconReading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
    'LazyElIconRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
    'LazyElIconRefresh': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
    'LazyElIconRefreshLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
    'LazyElIconRefrigerator': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
    'LazyElIconRemoveFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
    'LazyElIconSchool': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
    'LazyElIconScaleToOriginal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
    'LazyElIconSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
    'LazyElIconSemiSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
    'LazyElIconSetUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
    'LazyElIconSearch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
    'LazyElIconSell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
    'LazyElIconSetting': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
    'LazyElIconScissor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
    'LazyElIconService': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
    'LazyElIconShare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
    'LazyElIconRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
    'LazyElIconShip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
    'LazyElIconShoppingCart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
    'LazyElIconShop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
    'LazyElIconShoppingBag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
    'LazyElIconShoppingTrolley': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
    'LazyElIconShoppingCartFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
    'LazyElIconSoldOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
    'LazyElIconSoccer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
    'LazyElIconSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
    'LazyElIconSort': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
    'LazyElIconSortUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
    'LazyElIconSortDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
    'LazyElIconStar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
    'LazyElIconStamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
    'LazyElIconSuccessFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
    'LazyElIconStopwatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
    'LazyElIconStarFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
    'LazyElIconSuitcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
    'LazyElIconSugar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
    'LazyElIconSunny': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
    'LazyElIconSuitcaseLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
    'LazyElIconSunrise': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
    'LazyElIconSwitchFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
    'LazyElIconSwitchButton': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
    'LazyElIconSwitch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
    'LazyElIconSunset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
    'LazyElIconTakeawayBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
    'LazyElIconTickets': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
    'LazyElIconToiletPaper': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
    'LazyElIconTimer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
    'LazyElIconTicket': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
    'LazyElIconTopLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
    'LazyElIconTopRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
    'LazyElIconTools': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
    'LazyElIconTrendCharts': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
    'LazyElIconTrophy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
    'LazyElIconTrophyBase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
    'LazyElIconTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
    'LazyElIconTurnOff': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
    'LazyElIconUpload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
    'LazyElIconUnlock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
    'LazyElIconUmbrella': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
    'LazyElIconVan': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
    'LazyElIconUploadFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
    'LazyElIconUserFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
    'LazyElIconVideoCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
    'LazyElIconUser': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
    'LazyElIconVideoPause': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
    'LazyElIconWallet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
    'LazyElIconWalletFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
    'LazyElIconVideoCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
    'LazyElIconView': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
    'LazyElIconVideoPlay': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
    'LazyElIconWarnTriangleFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
    'LazyElIconWindPower': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
    'LazyElIconWarningFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
    'LazyElIconWarning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
    'LazyElIconZoomIn': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
    'LazyElIconWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
    'LazyElIcondefault': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']>
    'LazyElIconZoomOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
    'LazyElIconWatermelon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
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
export const ElAnchor: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
export const ElAlert: typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
export const ElAffix: typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
export const ElAutocomplete: typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
export const ElAvatar: typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
export const ElAutoResizer: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
export const ElBadge: typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
export const ElBreadcrumbItem: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
export const ElBreadcrumb: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
export const ElBacktop: typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
export const ElButtonGroup: typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
export const ElButton: typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
export const ElCard: typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
export const ElCalendar: typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
export const ElCascader: typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
export const ElCarouselItem: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
export const ElCarousel: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
export const ElCheckTag: typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
export const ElCascaderPanel: typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
export const ElCheckbox: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
export const ElCheckboxButton: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
export const ElCol: typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
export const ElCollapse: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
export const ElAnchorLink: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
export const ElCheckboxGroup: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
export const ElCollapseItem: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
export const ElAside: typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
export const ElCollection: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
export const ElCollectionItem: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
export const ElConfigProvider: typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
export const ElCollapseTransition: typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
export const ElCountdown: typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
export const ElContainer: typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
export const ElColorPicker: typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
export const ElDialog: typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
export const ElDatePicker: typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
export const ElDescriptions: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
export const ElDescriptionsItem: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
export const ElDivider: typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
export const ElDrawer: typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
export const ElDropdownItem: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
export const ElForm: typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
export const ElEmpty: typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
export const ElDropdown: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
export const ElImageViewer: typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
export const ElDropdownMenu: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
export const ElFormItem: typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
export const ElInput: typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
export const ElHeader: typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
export const ElFooter: typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
export const ElInputNumber: typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
export const ElMention: typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
export const ElIcon: typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
export const ElLink: typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
export const ElMain: typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
export const ElImage: typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
export const ElOptionGroup: typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
export const ElInputTag: typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
export const ElMenuItemGroup: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
export const ElMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
export const ElOverlay: typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
export const ElOption: typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
export const ElMenuItem: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
export const ElPopconfirm: typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
export const ElPageHeader: typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
export const ElPagination: typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
export const ElPopperContent: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
export const ElPopover: typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
export const ElPopperTrigger: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
export const ElPopperArrow: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
export const ElProgress: typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
export const ElRadioButton: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
export const ElPopper: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
export const ElRadio: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
export const ElRate: typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
export const ElResult: typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
export const ElRow: typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
export const ElRadioGroup: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
export const ElScrollbar: typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
export const ElSelect: typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
export const ElSelectV2: typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
export const ElSegmented: typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
export const ElSkeleton: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
export const ElSlider: typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
export const ElStep: typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
export const ElSteps: typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
export const ElStatistic: typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
export const ElSkeletonItem: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
export const ElSpace: typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
export const ElSwitch: typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
export const ElTabPane: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
export const ElSubMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
export const ElTableV2: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
export const ElTableColumn: typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
export const ElTag: typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
export const ElText: typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
export const ElTimeSelect: typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
export const ElTabs: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
export const ElTimelineItem: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
export const ElTooltip: typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
export const ElTimePicker: typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
export const ElTimeline: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
export const ElTable: typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
export const ElTour: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
export const ElTransfer: typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
export const ElTourStep: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
export const ElTreeSelect: typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
export const ElIconAddLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
export const ElWatermark: typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
export const ElTree: typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
export const ElUpload: typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
export const ElIconAim: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
export const ElIconArrowDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
export const ElTreeV2: typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
export const ElIconArrowDownBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
export const ElIconApple: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
export const ElIconAlarmClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
export const ElIconArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
export const ElIconArrowUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
export const ElIconArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
export const ElIconArrowRightBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
export const ElIconArrowLeftBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
export const ElIconBaseball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
export const ElIconAvatar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
export const ElIconBack: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
export const ElIconArrowUpBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
export const ElIconBasketball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
export const ElIconBell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
export const ElIconBicycle: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
export const ElIconBowl: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
export const ElIconBellFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
export const ElIconBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
export const ElIconBottomRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
export const ElIconBottomLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
export const ElIconBriefcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
export const ElIconBrushFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
export const ElIconBrush: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
export const ElIconBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
export const ElIconBurger: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
export const ElIconCalendar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
export const ElIconCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
export const ElIconCaretBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
export const ElIconCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
export const ElIconCaretLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
export const ElIconCaretRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
export const ElIconCaretTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
export const ElIconChatDotRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
export const ElIconCellphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
export const ElIconChatLineRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
export const ElIconChatLineSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
export const ElIconChatDotSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
export const ElIconChatSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
export const ElIconChatRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
export const ElIconChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
export const ElIconCherry: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
export const ElIconCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
export const ElIconChicken: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
export const ElIconCircleCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
export const ElIconCircleCheckFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
export const ElIconCirclePlusFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
export const ElIconCirclePlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
export const ElIconCircleClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
export const ElIconCircleCloseFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
export const ElIconClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
export const ElIconClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
export const ElIconCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
export const ElIconCloseBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
export const ElIconCoffee: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
export const ElIconCoffeeCup: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
export const ElIconCoin: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
export const ElIconColdDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
export const ElIconCollection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
export const ElIconComment: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
export const ElIconCollectionTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
export const ElIconCompass: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
export const ElIconChromeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
export const ElIconCoordinate: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
export const ElIconCopyDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
export const ElIconCreditCard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
export const ElIconCrop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
export const ElIconDArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
export const ElIconDCaret: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
export const ElIconDArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
export const ElIconCpu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
export const ElIconDataAnalysis: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
export const ElIconConnection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
export const ElIconDataBoard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
export const ElIconDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
export const ElIconDeleteFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
export const ElIconDataLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
export const ElIconDeleteLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
export const ElIconDiscount: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
export const ElIconDessert: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
export const ElIconDishDot: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
export const ElIconDocumentChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
export const ElIconDish: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
export const ElIconDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
export const ElIconDocumentAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
export const ElIconDocumentRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
export const ElIconDocumentDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
export const ElIconDownload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
export const ElIconDocumentCopy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
export const ElIconEleme: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
export const ElIconEditPen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
export const ElIconDrizzling: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
export const ElIconExpand: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
export const ElIconElemeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
export const ElIconElementPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
export const ElIconEdit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
export const ElIconFailed: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
export const ElIconFemale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
export const ElIconFilter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
export const ElIconFilm: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
export const ElIconFirstAidKit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
export const ElIconFiles: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
export const ElIconFinished: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
export const ElIconFold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
export const ElIconFlag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
export const ElIconFolderDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
export const ElIconFolderAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
export const ElIconFolder: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
export const ElIconFolderChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
export const ElIconFood: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
export const ElIconFolderOpened: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
export const ElIconForkSpoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
export const ElIconFolderRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
export const ElIconFootball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
export const ElIconFullScreen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
export const ElIconFries: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
export const ElIconGobletSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
export const ElIconGoblet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
export const ElIconGobletFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
export const ElIconGoods: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
export const ElIconGoldMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
export const ElIconGobletSquareFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
export const ElIconGoodsFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
export const ElIconGrid: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
export const ElIconGrape: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
export const ElIconHandbag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
export const ElIconHeadset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
export const ElIconHelp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
export const ElIconGuide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
export const ElIconHouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
export const ElIconHide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
export const ElIconHomeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
export const ElIconHelpFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
export const ElIconHistogram: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
export const ElIconIceCreamRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
export const ElIconIceCream: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
export const ElIconHotWater: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
export const ElIconIceCreamSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
export const ElIconIceTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
export const ElIconKnifeFork: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
export const ElIconLightning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
export const ElIconInfoFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
export const ElIconIphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
export const ElIconIceDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
export const ElIconKey: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
export const ElIconLink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
export const ElIconList: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
export const ElIconLoading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
export const ElIconLocationInformation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
export const ElIconLock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
export const ElIconLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
export const ElIconMagnet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
export const ElIconLocationFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
export const ElIconLollipop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
export const ElIconMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
export const ElIconMale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
export const ElIconMagicStick: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
export const ElIconMemo: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
export const ElIconMessage: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
export const ElIconManagement: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
export const ElIconMapLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
export const ElIconMenu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
export const ElIconMessageBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
export const ElIconMicrophone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
export const ElIconMic: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
export const ElIconMilkTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
export const ElIconMoney: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
export const ElIconMinus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
export const ElIconMoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
export const ElIconMoonNight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
export const ElIconMore: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
export const ElIconMouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
export const ElIconMostlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
export const ElIconMoreFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
export const ElIconMute: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
export const ElIconMonitor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
export const ElIconMug: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
export const ElIconNoSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
export const ElIconNotebook: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
export const ElIconOdometer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
export const ElIconMuteNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
export const ElIconNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
export const ElIconOfficeBuilding: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
export const ElIconOpportunity: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
export const ElIconPaperclip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
export const ElIconOrange: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
export const ElIconOperation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
export const ElIconPhone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
export const ElIconPear: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
export const ElIconPartlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
export const ElIconPictureRounded: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
export const ElIconPicture: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
export const ElIconOpen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
export const ElIconPhoneFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
export const ElIconPictureFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
export const ElIconPieChart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
export const ElIconPlatform: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
export const ElIconPosition: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
export const ElIconPlace: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
export const ElIconPouring: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
export const ElIconPriceTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
export const ElIconPointer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
export const ElIconPresent: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
export const ElIconPostcard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
export const ElIconPrinter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
export const ElIconQuestionFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
export const ElIconPromotion: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
export const ElIconPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
export const ElIconQuartzWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
export const ElIconRank: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
export const ElIconReadingLamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
export const ElIconRefreshRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
export const ElIconReading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
export const ElIconRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
export const ElIconRefresh: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
export const ElIconRefreshLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
export const ElIconRefrigerator: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
export const ElIconRemoveFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
export const ElIconSchool: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
export const ElIconScaleToOriginal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
export const ElIconSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
export const ElIconSemiSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
export const ElIconSetUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
export const ElIconSearch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
export const ElIconSell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
export const ElIconSetting: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
export const ElIconScissor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
export const ElIconService: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
export const ElIconShare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
export const ElIconRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
export const ElIconShip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
export const ElIconShoppingCart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
export const ElIconShop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
export const ElIconShoppingBag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
export const ElIconShoppingTrolley: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
export const ElIconShoppingCartFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
export const ElIconSoldOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
export const ElIconSoccer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
export const ElIconSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
export const ElIconSort: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
export const ElIconSortUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
export const ElIconSortDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
export const ElIconStar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
export const ElIconStamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
export const ElIconSuccessFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
export const ElIconStopwatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
export const ElIconStarFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
export const ElIconSuitcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
export const ElIconSugar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
export const ElIconSunny: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
export const ElIconSuitcaseLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
export const ElIconSunrise: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
export const ElIconSwitchFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
export const ElIconSwitchButton: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
export const ElIconSwitch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
export const ElIconSunset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
export const ElIconTakeawayBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
export const ElIconTickets: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
export const ElIconToiletPaper: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
export const ElIconTimer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
export const ElIconTicket: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
export const ElIconTopLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
export const ElIconTopRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
export const ElIconTools: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
export const ElIconTrendCharts: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
export const ElIconTrophy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
export const ElIconTrophyBase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
export const ElIconTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
export const ElIconTurnOff: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
export const ElIconUpload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
export const ElIconUnlock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
export const ElIconUmbrella: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
export const ElIconVan: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
export const ElIconUploadFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
export const ElIconUserFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
export const ElIconVideoCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
export const ElIconUser: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
export const ElIconVideoPause: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
export const ElIconWallet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
export const ElIconWalletFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
export const ElIconVideoCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
export const ElIconView: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
export const ElIconVideoPlay: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
export const ElIconWarnTriangleFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
export const ElIconWindPower: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
export const ElIconWarningFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
export const ElIconWarning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
export const ElIconZoomIn: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
export const ElIconWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
export const ElIcondefault: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']
export const ElIconZoomOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
export const ElIconWatermelon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
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
export const LazyElAnchor: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
export const LazyElAlert: LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
export const LazyElAffix: LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
export const LazyElAutocomplete: LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
export const LazyElAvatar: LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
export const LazyElAutoResizer: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
export const LazyElBadge: LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
export const LazyElBreadcrumbItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
export const LazyElBreadcrumb: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
export const LazyElBacktop: LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
export const LazyElButtonGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
export const LazyElButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
export const LazyElCard: LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
export const LazyElCalendar: LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
export const LazyElCascader: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
export const LazyElCarouselItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
export const LazyElCarousel: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
export const LazyElCheckTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
export const LazyElCascaderPanel: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
export const LazyElCheckbox: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
export const LazyElCheckboxButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
export const LazyElCol: LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
export const LazyElCollapse: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
export const LazyElAnchorLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
export const LazyElCheckboxGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
export const LazyElCollapseItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
export const LazyElAside: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
export const LazyElCollection: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
export const LazyElCollectionItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
export const LazyElConfigProvider: LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
export const LazyElCollapseTransition: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
export const LazyElCountdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
export const LazyElContainer: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
export const LazyElColorPicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
export const LazyElDialog: LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
export const LazyElDatePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
export const LazyElDescriptions: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
export const LazyElDescriptionsItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
export const LazyElDivider: LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
export const LazyElDrawer: LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
export const LazyElDropdownItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
export const LazyElForm: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
export const LazyElEmpty: LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
export const LazyElDropdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
export const LazyElImageViewer: LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
export const LazyElDropdownMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
export const LazyElFormItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
export const LazyElInput: LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
export const LazyElHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
export const LazyElFooter: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
export const LazyElInputNumber: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
export const LazyElMention: LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
export const LazyElIcon: LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
export const LazyElLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
export const LazyElMain: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
export const LazyElImage: LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
export const LazyElOptionGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
export const LazyElInputTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
export const LazyElMenuItemGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
export const LazyElMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
export const LazyElOverlay: LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
export const LazyElOption: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
export const LazyElMenuItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
export const LazyElPopconfirm: LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
export const LazyElPageHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
export const LazyElPagination: LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
export const LazyElPopperContent: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
export const LazyElPopover: LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
export const LazyElPopperTrigger: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
export const LazyElPopperArrow: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
export const LazyElProgress: LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
export const LazyElRadioButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
export const LazyElPopper: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
export const LazyElRadio: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
export const LazyElRate: LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
export const LazyElResult: LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
export const LazyElRow: LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
export const LazyElRadioGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
export const LazyElScrollbar: LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
export const LazyElSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
export const LazyElSelectV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
export const LazyElSegmented: LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
export const LazyElSkeleton: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
export const LazyElSlider: LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
export const LazyElStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
export const LazyElSteps: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
export const LazyElStatistic: LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
export const LazyElSkeletonItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
export const LazyElSpace: LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
export const LazyElSwitch: LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
export const LazyElTabPane: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
export const LazyElSubMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
export const LazyElTableV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
export const LazyElTableColumn: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
export const LazyElTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
export const LazyElText: LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
export const LazyElTimeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
export const LazyElTabs: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
export const LazyElTimelineItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
export const LazyElTooltip: LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
export const LazyElTimePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
export const LazyElTimeline: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
export const LazyElTable: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
export const LazyElTour: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
export const LazyElTransfer: LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
export const LazyElTourStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
export const LazyElTreeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
export const LazyElIconAddLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
export const LazyElWatermark: LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
export const LazyElTree: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
export const LazyElUpload: LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
export const LazyElIconAim: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
export const LazyElIconArrowDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
export const LazyElTreeV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
export const LazyElIconArrowDownBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
export const LazyElIconApple: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
export const LazyElIconAlarmClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
export const LazyElIconArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
export const LazyElIconArrowUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
export const LazyElIconArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
export const LazyElIconArrowRightBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
export const LazyElIconArrowLeftBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
export const LazyElIconBaseball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
export const LazyElIconAvatar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
export const LazyElIconBack: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
export const LazyElIconArrowUpBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
export const LazyElIconBasketball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
export const LazyElIconBell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
export const LazyElIconBicycle: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
export const LazyElIconBowl: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
export const LazyElIconBellFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
export const LazyElIconBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
export const LazyElIconBottomRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
export const LazyElIconBottomLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
export const LazyElIconBriefcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
export const LazyElIconBrushFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
export const LazyElIconBrush: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
export const LazyElIconBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
export const LazyElIconBurger: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
export const LazyElIconCalendar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
export const LazyElIconCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
export const LazyElIconCaretBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
export const LazyElIconCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
export const LazyElIconCaretLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
export const LazyElIconCaretRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
export const LazyElIconCaretTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
export const LazyElIconChatDotRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
export const LazyElIconCellphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
export const LazyElIconChatLineRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
export const LazyElIconChatLineSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
export const LazyElIconChatDotSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
export const LazyElIconChatSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
export const LazyElIconChatRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
export const LazyElIconChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
export const LazyElIconCherry: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
export const LazyElIconCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
export const LazyElIconChicken: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
export const LazyElIconCircleCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
export const LazyElIconCircleCheckFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
export const LazyElIconCirclePlusFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
export const LazyElIconCirclePlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
export const LazyElIconCircleClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
export const LazyElIconCircleCloseFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
export const LazyElIconClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
export const LazyElIconClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
export const LazyElIconCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
export const LazyElIconCloseBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
export const LazyElIconCoffee: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
export const LazyElIconCoffeeCup: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
export const LazyElIconCoin: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
export const LazyElIconColdDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
export const LazyElIconCollection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
export const LazyElIconComment: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
export const LazyElIconCollectionTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
export const LazyElIconCompass: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
export const LazyElIconChromeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
export const LazyElIconCoordinate: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
export const LazyElIconCopyDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
export const LazyElIconCreditCard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
export const LazyElIconCrop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
export const LazyElIconDArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
export const LazyElIconDCaret: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
export const LazyElIconDArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
export const LazyElIconCpu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
export const LazyElIconDataAnalysis: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
export const LazyElIconConnection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
export const LazyElIconDataBoard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
export const LazyElIconDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
export const LazyElIconDeleteFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
export const LazyElIconDataLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
export const LazyElIconDeleteLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
export const LazyElIconDiscount: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
export const LazyElIconDessert: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
export const LazyElIconDishDot: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
export const LazyElIconDocumentChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
export const LazyElIconDish: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
export const LazyElIconDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
export const LazyElIconDocumentAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
export const LazyElIconDocumentRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
export const LazyElIconDocumentDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
export const LazyElIconDownload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
export const LazyElIconDocumentCopy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
export const LazyElIconEleme: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
export const LazyElIconEditPen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
export const LazyElIconDrizzling: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
export const LazyElIconExpand: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
export const LazyElIconElemeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
export const LazyElIconElementPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
export const LazyElIconEdit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
export const LazyElIconFailed: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
export const LazyElIconFemale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
export const LazyElIconFilter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
export const LazyElIconFilm: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
export const LazyElIconFirstAidKit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
export const LazyElIconFiles: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
export const LazyElIconFinished: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
export const LazyElIconFold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
export const LazyElIconFlag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
export const LazyElIconFolderDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
export const LazyElIconFolderAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
export const LazyElIconFolder: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
export const LazyElIconFolderChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
export const LazyElIconFood: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
export const LazyElIconFolderOpened: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
export const LazyElIconForkSpoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
export const LazyElIconFolderRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
export const LazyElIconFootball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
export const LazyElIconFullScreen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
export const LazyElIconFries: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
export const LazyElIconGobletSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
export const LazyElIconGoblet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
export const LazyElIconGobletFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
export const LazyElIconGoods: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
export const LazyElIconGoldMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
export const LazyElIconGobletSquareFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
export const LazyElIconGoodsFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
export const LazyElIconGrid: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
export const LazyElIconGrape: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
export const LazyElIconHandbag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
export const LazyElIconHeadset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
export const LazyElIconHelp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
export const LazyElIconGuide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
export const LazyElIconHouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
export const LazyElIconHide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
export const LazyElIconHomeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
export const LazyElIconHelpFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
export const LazyElIconHistogram: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
export const LazyElIconIceCreamRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
export const LazyElIconIceCream: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
export const LazyElIconHotWater: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
export const LazyElIconIceCreamSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
export const LazyElIconIceTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
export const LazyElIconKnifeFork: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
export const LazyElIconLightning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
export const LazyElIconInfoFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
export const LazyElIconIphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
export const LazyElIconIceDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
export const LazyElIconKey: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
export const LazyElIconLink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
export const LazyElIconList: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
export const LazyElIconLoading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
export const LazyElIconLocationInformation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
export const LazyElIconLock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
export const LazyElIconLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
export const LazyElIconMagnet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
export const LazyElIconLocationFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
export const LazyElIconLollipop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
export const LazyElIconMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
export const LazyElIconMale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
export const LazyElIconMagicStick: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
export const LazyElIconMemo: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
export const LazyElIconMessage: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
export const LazyElIconManagement: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
export const LazyElIconMapLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
export const LazyElIconMenu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
export const LazyElIconMessageBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
export const LazyElIconMicrophone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
export const LazyElIconMic: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
export const LazyElIconMilkTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
export const LazyElIconMoney: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
export const LazyElIconMinus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
export const LazyElIconMoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
export const LazyElIconMoonNight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
export const LazyElIconMore: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
export const LazyElIconMouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
export const LazyElIconMostlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
export const LazyElIconMoreFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
export const LazyElIconMute: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
export const LazyElIconMonitor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
export const LazyElIconMug: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
export const LazyElIconNoSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
export const LazyElIconNotebook: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
export const LazyElIconOdometer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
export const LazyElIconMuteNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
export const LazyElIconNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
export const LazyElIconOfficeBuilding: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
export const LazyElIconOpportunity: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
export const LazyElIconPaperclip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
export const LazyElIconOrange: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
export const LazyElIconOperation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
export const LazyElIconPhone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
export const LazyElIconPear: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
export const LazyElIconPartlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
export const LazyElIconPictureRounded: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
export const LazyElIconPicture: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
export const LazyElIconOpen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
export const LazyElIconPhoneFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
export const LazyElIconPictureFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
export const LazyElIconPieChart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
export const LazyElIconPlatform: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
export const LazyElIconPosition: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
export const LazyElIconPlace: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
export const LazyElIconPouring: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
export const LazyElIconPriceTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
export const LazyElIconPointer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
export const LazyElIconPresent: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
export const LazyElIconPostcard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
export const LazyElIconPrinter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
export const LazyElIconQuestionFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
export const LazyElIconPromotion: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
export const LazyElIconPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
export const LazyElIconQuartzWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
export const LazyElIconRank: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
export const LazyElIconReadingLamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
export const LazyElIconRefreshRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
export const LazyElIconReading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
export const LazyElIconRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
export const LazyElIconRefresh: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
export const LazyElIconRefreshLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
export const LazyElIconRefrigerator: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
export const LazyElIconRemoveFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
export const LazyElIconSchool: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
export const LazyElIconScaleToOriginal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
export const LazyElIconSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
export const LazyElIconSemiSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
export const LazyElIconSetUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
export const LazyElIconSearch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
export const LazyElIconSell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
export const LazyElIconSetting: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
export const LazyElIconScissor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
export const LazyElIconService: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
export const LazyElIconShare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
export const LazyElIconRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
export const LazyElIconShip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
export const LazyElIconShoppingCart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
export const LazyElIconShop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
export const LazyElIconShoppingBag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
export const LazyElIconShoppingTrolley: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
export const LazyElIconShoppingCartFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
export const LazyElIconSoldOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
export const LazyElIconSoccer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
export const LazyElIconSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
export const LazyElIconSort: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
export const LazyElIconSortUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
export const LazyElIconSortDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
export const LazyElIconStar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
export const LazyElIconStamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
export const LazyElIconSuccessFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
export const LazyElIconStopwatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
export const LazyElIconStarFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
export const LazyElIconSuitcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
export const LazyElIconSugar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
export const LazyElIconSunny: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
export const LazyElIconSuitcaseLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
export const LazyElIconSunrise: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
export const LazyElIconSwitchFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
export const LazyElIconSwitchButton: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
export const LazyElIconSwitch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
export const LazyElIconSunset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
export const LazyElIconTakeawayBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
export const LazyElIconTickets: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
export const LazyElIconToiletPaper: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
export const LazyElIconTimer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
export const LazyElIconTicket: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
export const LazyElIconTopLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
export const LazyElIconTopRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
export const LazyElIconTools: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
export const LazyElIconTrendCharts: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
export const LazyElIconTrophy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
export const LazyElIconTrophyBase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
export const LazyElIconTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
export const LazyElIconTurnOff: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
export const LazyElIconUpload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
export const LazyElIconUnlock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
export const LazyElIconUmbrella: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
export const LazyElIconVan: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
export const LazyElIconUploadFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
export const LazyElIconUserFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
export const LazyElIconVideoCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
export const LazyElIconUser: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
export const LazyElIconVideoPause: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
export const LazyElIconWallet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
export const LazyElIconWalletFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
export const LazyElIconVideoCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
export const LazyElIconView: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
export const LazyElIconVideoPlay: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
export const LazyElIconWarnTriangleFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
export const LazyElIconWindPower: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
export const LazyElIconWarningFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
export const LazyElIconWarning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
export const LazyElIconZoomIn: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
export const LazyElIconWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
export const LazyElIcondefault: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['default']>
export const LazyElIconZoomOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
export const LazyElIconWatermelon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
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
