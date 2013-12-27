class User < ActiveRecord::Base
  include Clearance::User
  acts_as_tagger
  acts_as_taggable_on :froms,:tos,:cars
end
