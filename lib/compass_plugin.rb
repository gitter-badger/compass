# Enables support for Compass, a stylesheet authoring framework based on SASS.
# See http://compass-style.org/ for more details.
# Store Compass/SASS files (by default) within 'app/assets'.

module CompassInitializer
  def self.registered(app)
    require 'sass/plugin/rack'
    # require 'susy'
    # require 'breakpoint'

    Compass.configuration do |config|
      config.project_path = Padrino.root
      config.sass_dir = "app/assets"
      config.project_type = :stand_alone
      config.http_path = "/"
      config.css_dir = "public/stylesheets"
      config.images_dir = "public/images"
      config.javascripts_dir = "public/javascripts"
      config.fonts_dir = "public/fonts"
      # config.output_style =  :expanded

    end


    Compass.configure_sass_plugin!
    Compass.handle_configuration_change!

    app.use Sass::Plugin::Rack
  end


end
