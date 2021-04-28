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
      @tweet.save  # Formオブジェクトで定義したsaveメソッド
      return redirect_to root_path
    else
      render "new"
    end
  end

  def search
    # keywordが"　"の場合はnilを返す
    return nil if params[:keyword] == ""
    # タグのnameカラムの値にkeyword含まれるデータを取得
    tag = Tag.where(['name LIKE(?)', "%#{params[:keyword]}%"])
    render json: { keyword: tag }
  end

  private
  def tweet_params
    # Tweetsテーブルにmessage、Tagsテーブルへnameを保存できるように設定
    params.require(:tweets_tag).permit(:message, :name)
  end
end
