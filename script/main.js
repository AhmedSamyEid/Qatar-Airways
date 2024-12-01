function loadPage(page) {
  let content = '';

  switch(page) {
      case 'booking':
          content = `
              <h2>ذهاب وعودة</h2>
              <h3>ذهاب فقط</h3>
              <p>اختر نوع الرحلة التي تفضلها:</p>
              <ul>
                  <li>ذهاب وعودة: العودة خلال مدة محددة.</li>
                  <li>ذهاب فقط: رحلات ذهاب بدون العودة.</li>
              </ul>
              <p>يرجى التأكد من مواعيد الطيران المتاحة.</p>
              <div class="radio-container">
                  <input type="radio" id="radio1" name="radio-group">
                  <label for="radio1">الخيار الأول</label>

                  <input type="radio" id="radio2" name="radio-group">
                  <label for="radio2">الخيار الثاني</label>
              </div>
          `;
          break;
          case 'schedule':
            content = `
                <h2>جدول الرحلات</h2>
                <p>هنا يمكنك استعراض جدول الرحلات ومواعيدها.</p>
                <table>
                    <thead>
                        <tr>
                            <th>رقم الرحلة</th>
                            <th>من</th>
                            <th>إلى</th>
                            <th>تاريخ الإقلاع</th>
                            <th>تاريخ الوصول</th>
                            <th>الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1234</td>
                            <td><input type="text" placeholder="أدخل مكان الإقلاع"></td>
                            <td><input type="text" placeholder="أدخل مكان الوصول"></td>
                            <td>2024-10-01 08:00</td>
                            <td>2024-10-01 11:00</td>
                            <td>في الوقت المحدد</td>
                        </tr>
                        <tr>
                            <td>5678</td>
                            <td><input type="text" placeholder="أدخل مكان الإقلاع"></td>
                            <td><input type="text" placeholder="أدخل مكان الوصول"></td>
                            <td>2024-10-02 15:00</td>
                            <td>2024-10-02 19:00</td>
                            <td>تأخير 30 دقيقة</td>
                        </tr>
                        <!-- يمكنك إضافة المزيد من الصفوف هنا -->
                    </tbody>
                </table>
            `;
          break;
          case 'flight-status':
            content = `
                <h2>حالة الرحلة</h2>
                <p>هنا يمكنك متابعة حالة الرحلات الخاصة بك. يرجى إدخال تفاصيل الرحلة لمتابعة حالتها.</p>
                <form class="flight-status-form">
                    <label for="flight-number">رقم الرحلة:</label>
                    <input type="text" id="flight-number" placeholder="أدخل رقم الرحلة">
        
                    <label for="departure-date">تاريخ الإقلاع:</label>
                    <input type="date" id="departure-date">
        
                    <button type="submit">تحقق من الحالة</button>
                </form>
                <div class="status-results">
                    <h3>نتائج الحالة:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>رقم الرحلة</th>
                                <th>من</th>
                                <th>إلى</th>
                                <th>تاريخ الإقلاع</th>
                                <th>تاريخ الوصول</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1234</td>
                                <td>القاهرة</td>
                                <td>الإسكندرية</td>
                                <td>2024-10-01 08:00</td>
                                <td>2024-10-01 09:30</td>
                                <td>في الوقت المحدد</td>
                            </tr>
                            <tr>
                                <td>5678</td>
                                <td>القاهرة</td>
                                <td>الأقصر</td>
                                <td>2024-10-02 15:00</td>
                                <td>2024-10-02 17:00</td>
                                <td>تأخير 15 دقيقة</td>
                            </tr>
                            <!-- يمكنك إضافة المزيد من الصفوف هنا -->
                        </tbody>
                    </table>
                </div>
            `;
            break;
        
            case 'review-booking':
              content = `
                  <h2>استعراض الحجز</h2>
                  <p>هنا يمكنك مراجعة حجوزاتك السابقة وتعديلها.</p>
                  <form class="booking-review-form">
                      <label for="booking-id">رقم الحجز:</label>
                      <input type="text" id="booking-id" placeholder="أدخل رقم الحجز">
          
                      <button type="submit">استعراض الحجز</button>
                  </form>
                  <div class="booking-details">
                      <h3>تفاصيل الحجز:</h3>
                      <table>
                          <thead>
                              <tr>
                                  <th>رقم الحجز</th>
                                  <th>اسم المسافر</th>
                                  <th>وجهة الرحلة</th>
                                  <th>تاريخ الإقلاع</th>
                                  <th>تاريخ العودة</th>
                                  <th>حالة الحجز</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>ABC123</td>
                                  <td>أحمد علي</td>
                                  <td>القاهرة إلى الإسكندرية</td>
                                  <td>2024-10-01</td>
                                  <td>2024-10-03</td>
                                  <td>مؤكد</td>
                              </tr>
                              <tr>
                                  <td>XYZ456</td>
                                  <td>فاطمة محمد</td>
                                  <td>القاهرة إلى الأقصر</td>
                                  <td>2024-10-05</td>
                                  <td>2024-10-07</td>
                                  <td>ملغي</td>
                              </tr>
                              <!-- يمكنك إضافة المزيد من الصفوف هنا -->
                          </tbody>
                      </table>
                  </div>
              `;
              break;
          
          break;
          case 'travel-procedures':
            content = `
                <h2>إجراءات السفر</h2>
                <p>هنا يمكنك إتمام إجراءات السفر بكل سهولة. يرجى اتباع الخطوات التالية لضمان تجربة سفر مريحة وسلسة:</p>
                <ol class="procedures-list">
                    <li>
                        <h3>التحقق من المستندات</h3>
                        <p>تأكد من أن لديك جميع المستندات الضرورية للسفر مثل جواز السفر، تأشيرات الدخول، وتذاكر الطيران.</p>
                    </li>
                    <li>
                        <h3>التسجيل في الرحلة</h3>
                        <p>قم بتسجيل الدخول عبر الإنترنت أو في المطار قبل موعد الرحلة لتجنب أي تأخير.</p>
                    </li>
                    <li>
                        <h3>تسليم الأمتعة</h3>
                        <p>تأكد من تسليم الأمتعة في كاونتر تسجيل الأمتعة واحتفظ بالبطاقات الخاصة بها.</p>
                    </li>
                    <li>
                        <h3>الأمن والمراقبة</h3>
                        <p>مرر عبر نقاط التفتيش الأمنية وأكد من الالتزام بالمعايير الأمنية المطبقة.</p>
                    </li>
                    <li>
                        <h3>الانتظار والإقلاع</h3>
                        <p>انتظر في منطقة الانتظار حتى يتم الإعلان عن Boarding، ثم توجه إلى بوابة الرحلة للإقلاع.</p>
                    </li>
                </ol>
            `;
            break;
        
      default:
          content = `<h2>مرحبًا بك!</h2><p>يرجى اختيار صفحة من الأزرار أعلاه لاستعراض المحتوى.</p>`;
  }


  document.getElementById('page-content').innerHTML = content;
}
document.querySelectorAll('.show-content').forEach(button => {
  button.addEventListener('click', function(e) {
      e.preventDefault();


      document.querySelectorAll('.Privilege-Club a').forEach(link => {
          link.classList.remove('active');
      });


      this.classList.add('active');

      document.querySelectorAll('.content').forEach(content => {
          content.classList.remove('active');
          content.style.display = 'none';
      });
      

      const contentId = this.getAttribute('data-content');
      const selectedContent = document.getElementById(contentId);
      selectedContent.classList.add('active');
      selectedContent.style.display = 'block';
  });
});
