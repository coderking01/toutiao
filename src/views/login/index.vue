<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="user.mobile"
          name="用户名"
          placeholder="请输入手机号"
        >
          <i slot="left-icon" class="toutiao toutiao-shouji"></i>
        </van-field>
        <van-field v-model="user.code" name="密码" placeholder="请输入验证码">
          <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
          <template #button>
            <van-button class="send-ssm-btn" round size="small" type="default"
              >获取验证码</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <div class="login-wrap">
        <van-button class="login-btn" block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  // name: 'loginIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      const user = this.user

      try {
        const res = await login(user)
        console.log('登陆成功', res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或验证码错误')
        } else {
          console.log('登录失败', err)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .toutiao {
    height: 37px;
  }

  .send-ssm-btn {
    width: 128px;
    height: 36px;
    background-color: #ededed;
    color: #666;
  }

  .login-wrap {
    padding: 33px;
  }

  .login-btn {
    background-color: #6db4fb;
    border: none;
  }
}
</style>
