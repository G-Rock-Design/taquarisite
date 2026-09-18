
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.QSVzdYsv.js","/cdn/shopifycloud/checkout-web/assets/c1/app.B8n8SKfe.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CexZ5XA6.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.BVAlCIC7.js","/cdn/shopifycloud/checkout-web/assets/c1/grouping.BBREoF01.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.YNYqohzG.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.Dju_roFi.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-buyer-consent.DvlHEXZ-.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-shop-theme.D5gbTW60.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-updaters-helpers.Pwlr2jRe.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.BMNYpqQ-.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.CxXhzPyI.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error.xWuf8jeu.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.WuubzCv3.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.D-rHxaw8.js","/cdn/shopifycloud/checkout-web/assets/c1/mappers-checkout-policy.DLoHD44q.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail.DzoZ2CI_.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.CwgOZcQE.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.z3pMav2f.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-pt-BR.C35uJwum.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.BvWBH1RQ.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.ViazJEqm.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.CspS1oQk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.Cm8WyGJs.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.CZXdnCYT.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.BJLVpWU_.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.BPI5meHn.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.XX3-tw51.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.BR_dUmMp.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-compact.Bc56wuaF.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.194iin6c.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.NRCjH1Pk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.CRT4qzGH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.CKe9xgZ7.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.BKzmqvdQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useEcpSpiDebugLog.BonfX5AU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.GRTGsJDe.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DzH4PEJq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.BzrCKS4g.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.7Und_CNx.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge.iIXclGEh.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.CNkptfye.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.PPQd92w9.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.3i9t6ZRX.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.C9ZlB3Ct.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.B0PRSw2n.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.DDtlOIUn.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.Kw1ItNWZ.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.C_-6hAhN.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.COnmL243.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.DQjzx5dY.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.C_N_Ar0j.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.DbEx6E8F.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.CICNzq9s.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod.CojgIT5J.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.PaeJv-NC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.d1MhbXTN.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.SbaL3rlg.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.B42yrLQM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.hlN4EKrW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.uEocsMve.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.CaD1V6Cf.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.BzHVbHNl.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.BD8io3Gk.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.CDg6GPrQ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.HD4HwEqy.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.65QfEJYw.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.l8nm1vYu.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.D0mxzceS.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.D4rbCswt.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CKVzwbwc.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.ClzH2Etz.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.DvJhkrHr.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha.BCWdQvTx.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.CaEUGP_O.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.lVyEAUiq.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentMethods.DFnsGvIv.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.CNps4GXD.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.CXqBMaq2.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DHAx-nRI.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DgJ6l3vV.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.BzY5vTzD.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.3_-PKnLi.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.BDfG7dRa.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.DIMdhSGm.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-browser-engine.Bd-K5L9l.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors.BKS-pp4p.js","/cdn/shopifycloud/checkout-web/assets/c1/performance-index.BqsxpRCA.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.B7OaXfvj.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.Bt7hYZHf.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.BT_Qmzv3.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode.CyPoByEY.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates.ChO2GdxN.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.BcwRcL8Y.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.CC7GzNDo.js","/cdn/shopifycloud/checkout-web/assets/c1/EmailField.DuqEK47M.js","/cdn/shopifycloud/checkout-web/assets/c1/Sheet.CWWeEu5j.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.1HCIAp6q.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4.EwEgHOG0.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.CGYuiX0j.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.Bw7DE2_D.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-host.CnCoqf3h.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.CvaXgM5M.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07._AhUrmi1.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.DCV3miiE.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BmRUgqBf.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/grouping.DJksNKpk.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/previous.BR8OQ9Kr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.DLw08nJM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.aPApdPe_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/IncentiveBadge.Dlnp55te.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/publishMessage.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CxfTiM6_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethods.1rEt_I9C.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BwQxlzN-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.SrYMuQu4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.DfWUBaTh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DWE5rRxz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.CpR5hiDV.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0884/7232/2362/files/Emporio_481_1_x320.png?v=1723489911"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  