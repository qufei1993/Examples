#include <assert.h>
#include <string.h>
#define NAPI_EXPERIMENTAL
#define NAPI_VERSION 3
#include <node_api.h>

napi_value getNApiInfo(napi_env env, napi_callback_info info) {
  napi_status status;
  napi_value result;
  char *str = "Hello Node.js N-API!";

  // status = napi_create_string_utf8(env, str, NAPI_AUTO_LENGTH, &result);
  status = napi_create_string_utf8(env, str, strlen(str), &result);
  assert(status == napi_ok);
  return result;
}

napi_value init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor properties[] = {
    {
      "getNApiInfo",
      NULL,
      getNApiInfo,
      NULL,
      NULL,
      NULL,
      napi_default,
      NULL
    }
  };
  
  status = napi_define_properties(env, exports, 1, properties);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(hello, init);
