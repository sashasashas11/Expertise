require 'test_helper'

class ExpertizesControllerTest < ActionController::TestCase
  setup do
    @expertize = expertizes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:expertizes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create expertize" do
    assert_difference('Expertize.count') do
      post :create, expertize: {  }
    end

    assert_redirected_to expertize_path(assigns(:expertize))
  end

  test "should show expertize" do
    get :show, id: @expertize
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @expertize
    assert_response :success
  end

  test "should update expertize" do
    patch :update, id: @expertize, expertize: {  }
    assert_redirected_to expertize_path(assigns(:expertize))
  end

  test "should destroy expertize" do
    assert_difference('Expertize.count', -1) do
      delete :destroy, id: @expertize
    end

    assert_redirected_to expertizes_path
  end
end
