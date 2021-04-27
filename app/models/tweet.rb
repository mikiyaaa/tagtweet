class Tweet < ApplicationRecord
  has_many :tweet_tag_reletions
  has_many :tags, through: :tweet_tag_relations
end
