require 'spec_helper'

RSpec.describe "Basic page" do

  before do
      get "/"
  end

  it "returns Maslov" do
     expect(last_response.body).to eq "page"
  end

end
