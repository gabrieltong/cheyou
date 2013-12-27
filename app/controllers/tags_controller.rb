class TagsController < ApplicationController
  def index
    if @user
      @relation = @user.owned_tags
    else
      @relation =  ActsAsTaggableOn::Tag.where(true)
    end
    paginate
  end

  def show
    @tag = ActsAsTaggableOn::Tag.find(params[:id])
  end

  def add
    taggable = User.find(params[:id])
    render :json=>current_user.tag(taggable,:with=>params[:tags],:on=>params[:on])
  end

  def prefetch
    render :json=>ActsAsTaggableOn::Tag.where("name like ?","%#{params['pre']}%").limit(10).collect{|i|i.name}
  end
end
