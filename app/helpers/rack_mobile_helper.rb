# Helper methods defined here can be accessed in any controller or view in the application

module Compass
  class App
    module RackMobileHelper
      # require these patches from your sinatra/padrino app
      module Padrino::Rendering::InstanceMethods

        #render foo.mobile.haml if it exists and request is deemed 'mobile', else foo.haml is rendered
        #applies for layouts too (application.mobile.haml served for mobile, else application.haml)
        def locale
          #instead of using I18n.locale, use Rack-Mobile-Detect to try and set a 'mobile' pseudo-locale.
          Padrino::Rendering::MOBILE_LOCALE if request_from_mobile_agent?
        end

        def request_from_mobile_agent?
          !!env[Rack::MobileDetect::X_HEADER]
        end
      end
      #
      module Padrino::Rendering
        #the string to use to resolve mobile templates - e.g. foo.mobile.haml
        MOBILE_LOCALE = "mobile"
      end
    end

    helpers RackMobileHelper
  end
end