class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
  end

  def new
    # TweetsTagモデルのインスタンスを生成
    @tweet = TweetsTag.new
  end

  def create
    @tweet = TweetsTag.new(tweet_params)
    if @tweet.valid?
      @tweet.save
      return redirect_to root_path
    else
      render "new"
    end
  end

  private
  def tweet_params
    # Tweetsテーブルにmessage、Tagsテーブルへnameを送信できるように設定
    params.require(:tweets_tag).permit(:message, :name)
  end
end
