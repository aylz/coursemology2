class User::Identity < ActiveRecord::Base
  belongs_to :user, inverse_of: :identities
end