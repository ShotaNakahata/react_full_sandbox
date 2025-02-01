import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
export async function action({ request }) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("mode");

  try {
    // フォームデータ取得
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    console.log("Parsed formData:", data);

    // API リクエスト
    const response = await fetch(`http://localhost:8080/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // レスポンスの確認
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Response(JSON.stringify(errorData), {
        status: response.status,
      });
    }

    const responseData = await response.json();
    console.log("Response data:", responseData);
    return responseData;
  } catch (error) {
    console.error("Request failed:", error);
    return { message: "Request failed", error };
  }
}
