# Helper methods defined here can be accessed in any controller or view in the application
require 'csv'

module Compass
  class App
    module PageHelper

      def data_csv
        files_path.inject({}) { |hash, file_path|
        hash.merge( File.basename(file_path, '.csv') => CSV.read(file_path, {
                                                                              headers:true,
                                                                              return_headers: false,
                                                                              :row_sep => :auto}) ) }
      end

      private

      def files_path
        Dir.glob(Padrino.root + '/admin/data/*' )
      end



    end

    helpers PageHelper
  end
end
