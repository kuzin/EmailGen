//
// Helper for bullet proof buttons
// Type accepts 'primary' or 'secondary'
//
// Example:
// {{{ button type="primary" align="center" url="http://www.leemunroe.com" title="Call to action" }}}
//
module.exports.button = function (params) {
  return '\
    <table class="btn btn-' + params.hash.type + '" cellpadding="0" cellspacing="0">\
      <tr>\
        <td align="' + params.hash.align + '">\
          <table cellpadding="0" cellspacing="0">\
            <tr>\
              <td>\
                <a style="color:#ffffff;" color="#ffffff" href="' + params.hash.url + '"><font color="#ffffff">' + params.hash.title + '</font></a>\
              </td>\
            </tr>\
          </table>\
        </td>\
      </tr>\
    </table>\
  '
};
