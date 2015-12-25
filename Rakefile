require 'bundler/setup'
require 'padrino-core/cli/rake'

require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:spec)
task :default => :spec

PadrinoTasks.use(:database)
PadrinoTasks.use(:activerecord)
PadrinoTasks.init
