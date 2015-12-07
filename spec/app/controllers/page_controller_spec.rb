require 'spec_helper'

RSpec.describe "/page" do

  before do
      get "/page"
  end

  it "returns hello world" do
     expect(last_response.body).to eq "Hello World"
  end

end
