class User < ActiveRecord::Base
  include Clearance::User
  acts_as_tagger
  acts_as_taggable_on :froms  
  acts_as_taggable_on :tos
  acts_as_taggable_on :cars
end
