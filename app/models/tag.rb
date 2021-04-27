class Tag < ApplicationRecord
  has_many :tweet_tag_relations
  has_many :tweets, through: :tweet_tag_relations

  # 一意性制約はモデル単位で設ける必要がある
  validates :name, uniqueness: true
end
