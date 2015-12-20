require 'spec_helper'

RSpec.describe "/page" do

  before do
      get "/"
  end

  it "returns hello world" do
     expect(last_response.body).to eq "Маслов Сервис"
  end

end
