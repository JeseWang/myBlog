
<div class="copyright" >
  {% set current = date(Date.now(), "YYYY") %}
  &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  <span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love">
    <i class="fa fa-car"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">王琦</span>
</div>

<div class="powered-by">
  <a class="theme-link" href="https://github.com/JeseWang">GitHub</a>
</div>

<div class="theme-info">
  {{ __('footer.theme') }}
</div>
