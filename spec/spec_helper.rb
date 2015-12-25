require 'rack/mobile-detect'
require 'rack/test'
require 'factory_girl'

RACK_ENV = 'test' unless defined?(RACK_ENV)
require File.expand_path(File.dirname(__FILE__) + "/../config/boot")
Dir[File.expand_path(File.dirname(__FILE__) + "/../app/helpers/**/*.rb")].each(&method(:require))
Dir[File.expand_path(File.dirname(__FILE__) + "factories/*.rb")].each(&method(:require))

FactoryGirl.definition_file_paths = [
    File.join(Padrino.root, 'factories'),
    File.join(Padrino.root, 'test', 'factories'),
    File.join(Padrino.root, 'spec', 'factories')
]

# Dir[Padrino.root.join('factories/*.rb')].each { |f| require f }

FactoryGirl.find_definitions
RSpec.configure do |conf|

  # conf.before(:suite) do
  #   puts "\n== Reset DB =="
  #   system "RAILS_ENV=test bin/rake db:reset"
  #
  #   puts "\n== Preparing DB =="
  #   system "RAILS_ENV=test bin/rake db:setup"
  # end

  conf.include FactoryGirl::Syntax::Methods
  conf.include Rack::Test::Methods
  conf.include Padrino::Helpers



end

# You can use this method to custom specify a Rack app
# you want rack-test to invoke:
#
#   app Test::App
#   app Test::App.tap { |a| }
#   app(Test::App) do
#     set :foo, :bar
#   end
#
def app(app = nil, &blk)
  @app ||= block_given? ? app.instance_eval(&blk) : app
  @app ||= Padrino.application
end
