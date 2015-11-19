# encoding: UTF-8


module Compass
  class Admin
    module ManageDataHelper

      def file_checked?(filename)
        case filename
          when /химчистка/
            true
          when /слесарные_работы/
            true
          else
            false
        end

      end


      def file_upload(filename)
          if File.exist?('/admin/data/' + filename)
            FileUtils.mv('admin/data/' + filename,
                         'admin/data/bak/' + filename + "__#{Time.now.strftime("%Y-%m-%d_%H:%M:%S")}")

            File.open('admin/data/' + filename, 'w+') do |f|
              f.write(params['file'][:tempfile].read.html_safe)
            end
          else
            false
          end
      end

      def file_download(filename)
        file = File.join(Padrino.root, "admin/data/#{filename}")
        send_file(file, :disposition => 'attachment', :filename => File.basename(file))
      end




    end

    helpers ManageDataHelper
  end
end